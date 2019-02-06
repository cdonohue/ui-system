import { textShadows } from "../config"

export default Object.keys(textShadows).reduce((classNames, key) => {
  const modifier = key === "default" ? "" : `-${key}`

  return {
    ...classNames,
    [`text-shadow${modifier}`]: [`text-shadow: ${textShadows[key]}`],
  }
}, {})
