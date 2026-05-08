# /review — Security & Robustness Review

Review the following code for security vulnerabilities and robustness issues.

## Check the following:

**OWASP Top 10:**
- [ ] Injection (SQL, NoSQL, command injection)
- [ ] Broken authentication / missing auth middleware
- [ ] Sensitive data exposure (passwords, tokens in logs or responses)
- [ ] Missing input validation / sanitization
- [ ] Security misconfiguration (CORS, headers)

**Robustness:**
- [ ] All async functions have try/catch
- [ ] Edge cases handled (empty input, null, undefined)
- [ ] HTTP status codes are correct (400 vs 404 vs 500)
- [ ] No unhandled promise rejections

## Output format:
1. **Critical issues** — must fix before commit
2. **Warnings** — should fix
3. **Suggestions** — optional improvements

Always explain WHY each issue is a problem, not just what it is.