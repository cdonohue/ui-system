import { zIndex } from "../config"

export default Object.keys(zIndex).reduce((classes, modifier) => {
  return {
    ...classes,
    [`z-${modifier}`]: [`z-index: ${zIndex[modifier]}`],
  }
}, {})
