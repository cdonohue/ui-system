import { leading } from "../config"

export default Object.keys(leading).reduce((classes, modifier) => {
  return {
    ...classes,
    [`leading-${modifier}`]: `line-height: ${leading[modifier]};`,
  }
}, {})
