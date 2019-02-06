import { backgroundColors } from "../config"

export default Object.keys(backgroundColors).reduce((classNames, modifier) => {
  return {
    ...classNames,
    [`bg-${modifier}`]: [`background-color: ${backgroundColors[modifier]}`],
  }
}, {})
