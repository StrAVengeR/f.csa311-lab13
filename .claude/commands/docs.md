# /docs — Generate JSDoc + README Section

Generate documentation for the provided code.

## Output 1 — JSDoc comments:
Add JSDoc to every exported function:
```js
/**
 * Brief description of what this does.
 * @param {string} id - Task ID
 * @param {Object} data - Task data
 * @param {string} data.title - Task title
 * @returns {Object} Created task object
 * @throws {Error} When task not found
 */
```

## Output 2 — README section:
Write a short README section for this module:
- What it does (1-2 sentences)
- Endpoint or function signature
- Example request/response (if API route)

## Output 3 — OpenAPI snippet (if route):
If the code is an Express route, also generate the OpenAPI 3.0 YAML snippet
to add to `partB/openapi.yaml`.