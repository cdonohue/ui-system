import { opacity } from "../config"

export default Object.keys(opacity).reduce((classNames, modifier) => {
  return {
    ...classNames,
    [`opacity-${modifier}`]: `opacity: ${opacity[modifier]};`,
  }
}, {})
