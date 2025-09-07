#!/usr/bin/env node

/**
 * 🔍 API Endpoint Diagnostic Script
 * Scans your codebase for URLs and prints detected API endpoints.
 */

const fs = require("fs");
const path = require("path");

const projectRoot = process.cwd();
const results = [];

function scanDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory() && !["node_modules", ".git"].includes(file)) {
      scanDir(fullPath);
    } else if (/\.(js|ts|tsx|jsx|json)$/.test(file)) {
      const content = fs.readFileSync(fullPath, "utf8");
      const urls = content.match(/https?:\/\/[^\s"'`]+/g);
      if (urls) {
        results.push({ file: fullPath, urls });
      }
    }
  }
}

// Run the scanner
console.log("🔍 Scanning project for API endpoints...\n");
scanDir(projectRoot);

if (results.length === 0) {
  console.log("⚠️ No API endpoints found in source files.");
} else {
  results.forEach(({ file, urls }) => {
    console.log(`📄 File: ${file}`);
    urls.forEach((url) => console.log(`   → ${url}`));
  });
}
