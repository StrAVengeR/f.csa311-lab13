# /test — Generate Unit Tests

Generate Jest unit tests for the provided code following the testing pyramid.

## Test structure:
- Use `describe` blocks per function/endpoint
- Use `it` or `test` with clear descriptions: `it('should return 404 when task not found')`
- Cover: happy path, edge cases, error cases

## Required edge cases to consider:
- Empty / null / undefined inputs
- Boundary values (e.g. very long strings, negative numbers)
- Invalid types (string where number expected)
- Not found (404 cases)
- Duplicate entries

## Output format:
```js
describe('functionName', () => {
  it('should ...', () => { ... });
  it('should return 400 when ...', () => { ... });
  it('should handle ... edge case', () => { ... });
});
```

After writing tests, list any mocking assumptions made (e.g. DB mock).