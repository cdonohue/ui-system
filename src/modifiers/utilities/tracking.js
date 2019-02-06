import { tracking } from "../config"

export default Object.keys(tracking).reduce((classes, modifier) => {
  return {
    ...classes,
    [`tracking-${modifier}`]: `letter-spacing: ${tracking[modifier]};`,
  }
}, {})
