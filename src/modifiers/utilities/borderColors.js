import { borderColors } from "../config"

export default Object.keys(borderColors).reduce((classes, modifier) => {
  return {
    ...classes,
    [`border-${modifier}`]: `border-color: ${borderColors[modifier]};`,
  }
}, {})
