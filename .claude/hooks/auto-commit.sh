#!/bin/bash

# Auto-commit hook for Claude Code
# Runs after each Claude response to automatically commit changes

# Get the directory where this script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(cd "$SCRIPT_DIR/../.." && pwd)"

cd "$PROJECT_DIR" || exit 1

# Check if there are any changes to commit
if git diff --quiet && git diff --cached --quiet; then
    echo "No changes to commit" >&2
    exit 0
fi

# Generate commit message based on changed files
changed_files=$(git diff --name-only --cached; git diff --name-only)
file_count=$(echo "$changed_files" | grep -v '^$' | wc -l | tr -d ' ')

if [ "$file_count" -eq 1 ]; then
    commit_msg="update $(echo "$changed_files" | head -1)"
elif [ "$file_count" -le 3 ]; then
    commit_msg="update $(echo "$changed_files" | tr '\n' ', ' | sed 's/, $//')"
else
    commit_msg="update $file_count files"
fi

# Add all changes
git add -A

# Create commit
git commit -m "$commit_msg

🤖 auto-commit by claude code hook

co-authored-by: claude <noreply@anthropic.com>" --no-verify

echo "✓ auto-committed: $commit_msg" >&2