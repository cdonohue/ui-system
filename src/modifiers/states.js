import utilities from "./utilities"

export default Object.keys(utilities).reduce((classNames, key) => {
  return {
    ...classNames,
    [`active:${key}`]: `
      &:active {
        ${utilities[key]}
      }
    `,
    [`focus:${key}`]: `
      &:focus {
        ${utilities[key]}
      }
    `,
    [`hover:${key}`]: `
      &:hover {
        ${utilities[key]}
      }
    `,
  }
}, {})
