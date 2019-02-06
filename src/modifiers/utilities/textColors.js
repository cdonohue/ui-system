import { textColors } from "../config"

export default Object.keys(textColors).reduce((classNames, modifier) => {
  return {
    ...classNames,
    [`text-${modifier}`]: `color: ${textColors[modifier]};`,
  }
}, {})
