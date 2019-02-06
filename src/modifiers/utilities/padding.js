import { padding } from "../config"

export default Object.keys(padding).reduce((classNames, modifier) => {
  const size = padding[modifier]

  return {
    ...classNames,
    [`p-${modifier}`]: [`padding: ${size}`],
    [`px-${modifier}`]: [`padding-left: ${size}`, `padding-right: ${size}`],
    [`py-${modifier}`]: [`padding-top: ${size}`, `padding-bottom: ${size}`],
    [`pt-${modifier}`]: [`padding-top: ${size}`],
    [`pr-${modifier}`]: [`padding-right: ${size}`],
    [`pb-${modifier}`]: [`padding-bottom: ${size}`],
    [`pl-${modifier}`]: [`padding-left: ${size}`],
  }
}, {})
