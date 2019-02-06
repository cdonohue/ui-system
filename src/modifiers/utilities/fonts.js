import { fonts } from "../config"

export default Object.keys(fonts).reduce((classes, modifier) => {
  return {
    ...classes,
    [`font-${modifier}`]: [`font-family: ${fonts[modifier].join(", ")}`],
  }
}, {})
