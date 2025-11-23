import { execSync } from "child_process";
import { readFileSync, existsSync } from "fs";

export interface GitTimestamps {
  createdAt: Date;
  modifiedAt: Date;
}

// Cache for the git timestamps JSON file
let timestampCache: Record<string, { createdAt: string; modifiedAt: string }> | null = null;

/**
 * Load the git timestamps cache from the JSON file
 */
function loadTimestampCache() {
  if (timestampCache !== null) {
    return timestampCache;
  }

  const cacheFile = "git-timestamps.json";
  if (existsSync(cacheFile)) {
    try {
      const content = readFileSync(cacheFile, "utf-8");
      timestampCache = JSON.parse(content);
      return timestampCache;
    } catch (error) {
      console.warn("Failed to load git-timestamps.json:", error);
    }
  }

  timestampCache = {};
  return timestampCache;
}

/**
 * Get the creation and last modified timestamps from git history
 * First tries to read from the cached JSON file (git-timestamps.json)
 * Falls back to git commands if cache is unavailable (dev mode)
 * @param filePath - Path to the file relative to project root
 */
export function getGitTimestamps(filePath: string): GitTimestamps | null {
  try {
    // URL decode the file path to handle spaces and special characters
    const decodedPath = decodeURIComponent(filePath);

    // Try to get from cache first
    const cache = loadTimestampCache();
    if (cache && cache[decodedPath]) {
      return {
        createdAt: new Date(cache[decodedPath].createdAt),
        modifiedAt: new Date(cache[decodedPath].modifiedAt),
      };
    }

    // Fall back to git commands (for dev mode or uncached files)
    const createdAtStr = execSync(
      `git log --follow --format=%aI --reverse -- "${decodedPath}" | head -1`,
      { encoding: "utf-8" }
    ).trim();

    const modifiedAtStr = execSync(
      `git log -1 --format=%aI -- "${decodedPath}"`,
      { encoding: "utf-8" }
    ).trim();

    if (!createdAtStr || !modifiedAtStr) {
      return null;
    }

    return {
      createdAt: new Date(createdAtStr),
      modifiedAt: new Date(modifiedAtStr),
    };
  } catch (error) {
    // File might not be in git yet
    return null;
  }
}

/**
 * Get the most recent modification date across all files
 */
export function getGlobalLastUpdated(filePaths: string[]): Date | null {
  const dates = filePaths
    .map(getGitTimestamps)
    .filter((ts): ts is GitTimestamps => ts !== null)
    .map((ts) => ts.modifiedAt);

  if (dates.length === 0) return null;

  return new Date(Math.max(...dates.map((d) => d.getTime())));
}
