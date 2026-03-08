/**
 * Generate combinations and permutations from a string.
 * Supports filtering, sorting, and length limits.
 */

/**
 * @typedef {Object} CombinationOptions
 * @property {number} [minLength=1] Minimum result length
 * @property {number} [maxLength=str.length] Maximum result length
 * @property {boolean} [unique=true] Remove duplicate results
 * @property {boolean} [sort=true] Sort results
 * @property {"asc"|"desc"} [order="asc"] Sort order
 * @property {string} [startsWith] Only include words starting with this value
 * @property {string} [endsWith] Only include words ending with this value
 * @property {string} [notStartsWith] Exclude words starting with this value
 * @property {string} [notEndsWith] Exclude words ending with this value
 */

/**
 * Generate combinations/permutations from a string.
 *
 * @param {string} str Input string
 * @param {CombinationOptions} [options={}] Configuration options
 * @returns {string[]} Generated words
 */
function combinations(str, options = {}) {

  const config = {
    minLength: options.minLength ?? 1,
    maxLength: options.maxLength ?? str.length,
    unique: options.unique ?? true,
    sort: options.sort ?? true,
    order: options.order ?? "asc",
    startsWith: options.startsWith,
    endsWith: options.endsWith,
    notStartsWith: options.notStartsWith,
    notEndsWith: options.notEndsWith
  }

  const results = []

  function generate(prefix, remaining) {

    if (
      prefix.length >= config.minLength &&
      prefix.length <= config.maxLength
    ) {
      results.push(prefix)
    }

    if (prefix.length === config.maxLength) return

    for (let i = 0; i < remaining.length; i++) {

      const nextPrefix = prefix + remaining[i]

      const nextRemaining =
        remaining.slice(0, i) +
        remaining.slice(i + 1)

      generate(nextPrefix, nextRemaining)
    }
  }

  generate("", str)

  let output = config.unique
    ? [...new Set(results)]
    : results

  output = output.filter(word => {

    if (config.startsWith && !word.startsWith(config.startsWith))
      return false

    if (config.endsWith && !word.endsWith(config.endsWith))
      return false

    if (config.notStartsWith && word.startsWith(config.notStartsWith))
      return false

    if (config.notEndsWith && word.endsWith(config.notEndsWith))
      return false

    return true
  })

  if (config.sort) {

    output.sort((a, b) => {

      const lengthDiff =
        config.order === "asc"
          ? a.length - b.length
          : b.length - a.length

      if (lengthDiff !== 0) return lengthDiff

      return config.order === "asc"
        ? a.localeCompare(b)
        : b.localeCompare(a)
    })
  }

  return output
}

module.exports = combinations