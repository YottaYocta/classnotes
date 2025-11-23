#!/usr/bin/env node

/**
 * This script generates a JSON file containing git timestamps for all tracked files.
 * It should be run as a pre-commit hook to keep timestamps in sync with git history.
 */

import { execSync } from 'child_process';
import { writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const CACHE_FILE = 'git-timestamps.json';

/**
 * Get all markdown files in src/pages/notes
 */
function getAllMarkdownFiles(dir, fileList = []) {
  const files = readdirSync(dir);

  files.forEach(file => {
    const filePath = join(dir, file);
    const stat = statSync(filePath);

    if (stat.isDirectory()) {
      getAllMarkdownFiles(filePath, fileList);
    } else if (file.match(/\.(md|mdx)$/)) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

/**
 * Get git timestamps for a specific file
 */
function getGitTimestamps(filePath) {
  try {
    // Get the first commit date (creation)
    const createdAtStr = execSync(
      `git log --follow --format=%aI --reverse -- "${filePath}" | head -1`,
      { encoding: 'utf-8' }
    ).trim();

    // Get the last commit date (modification)
    const modifiedAtStr = execSync(
      `git log -1 --format=%aI -- "${filePath}"`,
      { encoding: 'utf-8' }
    ).trim();

    if (!createdAtStr || !modifiedAtStr) {
      return null;
    }

    return {
      createdAt: createdAtStr,
      modifiedAt: modifiedAtStr,
    };
  } catch (error) {
    console.error(`Error getting timestamps for ${filePath}:`, error.message);
    return null;
  }
}

/**
 * Main function
 */
function main() {
  console.log('Updating git timestamps cache...');

  const timestamps = {};
  const files = getAllMarkdownFiles('src/pages/notes');

  let processedCount = 0;
  let skippedCount = 0;

  files.forEach(filePath => {
    const ts = getGitTimestamps(filePath);
    if (ts) {
      timestamps[filePath] = ts;
      processedCount++;
    } else {
      skippedCount++;
    }
  });

  // Write to cache file
  writeFileSync(CACHE_FILE, JSON.stringify(timestamps, null, 2));

  console.log(`✓ Processed ${processedCount} files`);
  if (skippedCount > 0) {
    console.log(`⚠ Skipped ${skippedCount} files (not in git history)`);
  }
  console.log(`✓ Cache written to ${CACHE_FILE}`);
}

main();
