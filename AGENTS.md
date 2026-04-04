# Project Configuration for AI Assistants

## Common Commands

- **Dev server**: `pnpm dev`
- **Build**: `pnpm build`
- **Preview**: `pnpm preview`
- **Type check**: `pnpm typecheck`

## Notes Directory

- Notes are stored in `src/content/notes/`
- Create new notes directly in this directory (NOT in `content/` root)

## Frontmatter

When creating a new .md note file, always include this frontmatter:

```
---
title: ""
description: ""
tags: []
updated: "YYYY-MM-DD"
coAuthor: "opencode"
sections: ["Section 1", "Section 2", ...]
---
```

**Important**: Extract all `##` second-level headers from the content and add them as a string array to the `sections` field in the frontmatter.

## Git Workflow

- When creating/updating .md files in `src/content/notes/`, commit and push them together in one commit
- Don't include other non-.md files in the commit

## Preferences

- Be concise - answer in 1-3 sentences
- Don't add comments to code unless asked
- Don't create new folders unless explicitly requested
