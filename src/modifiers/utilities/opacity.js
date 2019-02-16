export default function generate(config) {
  const { opacity = {} } = config

  return Object.keys(opacity).reduce((classNames, modifier) => {
    return {
      ...classNames,
      [`opacity-${modifier}`]: [`opacity: ${opacity[modifier]}`],
    }
  }, {})
}
