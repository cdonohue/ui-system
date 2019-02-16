export default function generateStates(utilities) {
  return Object.keys(utilities).reduce((classNames, key) => {
    return {
      ...classNames,
      [`active:${key}`]: [
        `
        &:active {
          ${utilities[key]}
        }
      `,
      ],
      [`focus:${key}`]: [
        `
        &:focus {
          ${utilities[key]}
        }
      `,
      ],
      [`hover:${key}`]: [
        `
        &:hover {
          ${utilities[key]}
        }
      `,
      ],
    }
  }, {})
}
