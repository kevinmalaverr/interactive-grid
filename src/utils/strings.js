/**
 * @param {string} string
 * @returns {string}
 */
export const camelToKebab = (string) =>
  string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase()

/**
 *
 * @param {string} string
 * @param {string=} separator
 * @returns {string[]}
 */
export const splitHtml = (string, separator = "h2") =>
  string.split(new RegExp(`(?=<${separator})`, "g"))
