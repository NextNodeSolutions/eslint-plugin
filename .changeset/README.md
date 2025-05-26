# Changesets

This project uses [Changesets](https://github.com/changesets/changesets) to manage versions and changelogs.

## How it works

1. **When making changes**: Run `pnpm changeset` to create a changeset file describing your changes
2. **On PR creation**: The changeset-check workflow ensures a changeset is present
3. **On merge to main**: The release workflow automatically:
   - Creates a "Version Packages" PR with version bumps and changelog updates
   - When that PR is merged, publishes the new version to npm

## Creating a changeset

When you make changes that should trigger a version bump, run:

```bash
pnpm changeset
```

This will:
1. Ask which packages should be bumped (select `@nextnode/eslint-plugin`)
2. Ask what type of change this is:
   - **patch**: Bug fixes, small improvements
   - **minor**: New features, non-breaking changes
   - **major**: Breaking changes
3. Ask for a summary of the changes

This creates a markdown file in `.changeset/` that should be committed with your changes.

## Version types

- **patch** (1.0.0 → 1.0.1): Bug fixes, documentation updates, internal improvements
- **minor** (1.0.0 → 1.1.0): New features, new rules, non-breaking enhancements
- **major** (1.0.0 → 2.0.0): Breaking changes, removed features, changed APIs

## Workflow

1. Make your changes
2. Run `pnpm changeset` and follow the prompts
3. Commit the changeset file along with your changes
4. Create a PR
5. Once merged, the automation will handle versioning and publishing

## Manual commands

- `pnpm changeset`: Create a new changeset
- `pnpm changeset:version`: Apply changesets and update versions (done automatically)
- `pnpm changeset:publish`: Publish to npm (done automatically)
