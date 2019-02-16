export default function generate(config) {
  const { shadows = {} } = config

  return Object.keys(shadows).reduce((classNames, key) => {
    const modifier = key === "default" ? "" : `-${key}`

    return {
      ...classNames,
      [`shadow${modifier}`]: [`box-shadow: ${shadows[key]}`],
    }
  }, {})
}
