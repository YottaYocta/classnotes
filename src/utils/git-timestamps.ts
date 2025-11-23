import { execSync } from "child_process";

export interface GitTimestamps {
  createdAt: Date;
  modifiedAt: Date;
}

/**
 * Get the creation and last modified timestamps from git history
 * @param filePath - Path to the file relative to project root
 */
export function getGitTimestamps(filePath: string): GitTimestamps | null {
  try {
    // URL decode the file path to handle spaces and special characters
    const decodedPath = decodeURIComponent(filePath);

    // Get the first commit date (creation)
    const createdAtStr = execSync(
      `git log --follow --format=%aI --reverse -- "${decodedPath}" | head -1`,
      { encoding: "utf-8" }
    ).trim();

    // Get the last commit date (modification)
    const modifiedAtStr = execSync(
      `git log -1 --format=%aI -- "${decodedPath}"`,
      { encoding: "utf-8" }
    ).trim();

    console.log(createdAtStr, modifiedAtStr);

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
