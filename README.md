# string-combinations

Generate all possible combinations and permutations from a string.

This utility can also filter results using start/end rules and control result length.

---

## Installation

Install from NPM

```bash
npm install @cabdi_waaxid/combinations
```

Example usage:

```js
const combinations = require("@cabdi_waaxid/combinations")

const result = combinations("abc")

console.log(result)
```

---

## Output Example

Input:

```js
combinations("abc")
```

Output:

```
[
"a",
"b",
"c",
"ab",
"ac",
"ba",
"bc",
"ca",
"cb",
"abc",
"acb",
"bac",
"bca",
"cab",
"cba"
]
```

---

## Options

You can control the generator using options.

```js
combinations("abc", options)
```

### Available Options

| option | description |
|------|-------------|
| minLength | minimum result length |
| maxLength | maximum result length |
| unique | remove duplicate results |
| sort | enable sorting |
| order | "asc" or "desc" sorting |
| startsWith | only include results starting with value |
| endsWith | only include results ending with value |
| notStartsWith | exclude results starting with value |
| notEndsWith | exclude results ending with value |

---

## Examples

### Limit length

```js
combinations("abcd", {
  minLength: 2,
  maxLength: 3
})
```

---

### Start filter

```js
combinations("abcd", {
  startsWith: "a"
})
```

---

### End filter

```js
combinations("abcd", {
  endsWith: "d"
})
```

---

### Exclude start

```js
combinations("abcd", {
  notStartsWith: "b"
})
```

---

### Start and end filter

```js
combinations("abcd", {
  startsWith: "a",
  endsWith: "d"
})
```

---

## Complexity

The algorithm generates permutations, so complexity is approximately:

O(n!)

Avoid very long strings.

---

## License

MIT