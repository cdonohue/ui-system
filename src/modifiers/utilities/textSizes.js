import { textSizes } from "../config"

export default Object.keys(textSizes).reduce((classNames, modifier) => {
  return {
    ...classNames,
    [`text-${modifier}`]: [`font-size: ${textSizes[modifier]}`],
  }
}, {})
