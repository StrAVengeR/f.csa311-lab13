# /commit — Generate Conventional Commit Message

Generate a commit message for the provided changes following Conventional Commits format.

## Format:
```
<type>(<scope>): <short description>

<optional body — what and why, not how>

<optional footer>
Co-Authored-By: Claude <noreply@anthropic.com>
```

## Types:
- `feat` — new feature
- `fix` — bug fix
- `docs` — documentation only
- `test` — adding or fixing tests
- `refactor` — code change that neither fixes a bug nor adds a feature
- `chore` — build process, dependencies, tooling

## Rules:
- Subject line ≤72 characters
- Use imperative mood: "add" not "added", "fix" not "fixed"
- If AI assisted, always add Co-Authored-By footer
- Scope is optional but helpful: `feat(tasks):`, `fix(auth):`

## Output:
Provide 2 options (concise vs descriptive) and recommend one.