const concatStrings = (str1, str2) => {
  return `${str1} ${str2}`
}

const getStringLength = (str) => {
  return str.length
}

const hasSubstring = (str, substring) => {
  return str.includes(substring)
}

const toUpperCase = (str) => {
  return str.toUpperCase()
}

module.exports = {
  concatStrings,
  getStringLength,
  hasSubstring,
  toUpperCase
}

