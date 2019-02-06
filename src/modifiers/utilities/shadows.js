import { shadows } from "../config"

export default Object.keys(shadows).reduce((classNames, key) => {
  const modifier = key === "default" ? "" : `-${key}`

  return {
    ...classNames,
    [`shadow${modifier}`]: `box-shadow: ${shadows[key]};`,
  }
}, {})
