import { fontWeights } from "../config"

export default Object.keys(fontWeights).reduce((classNames, modifier) => {
  return {
    ...classNames,
    [`${modifier}`]: `font-weight: ${fontWeights[modifier]};`,
  }
}, {})
