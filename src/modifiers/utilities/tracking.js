export default function generate(config) {
  const { letterSpacing = {} } = config

  return Object.keys(letterSpacing).reduce((classes, modifier) => {
    return {
      ...classes,
      [`tracking-${modifier}`]: [`letter-spacing: ${letterSpacing[modifier]}`],
    }
  }, {})
}
