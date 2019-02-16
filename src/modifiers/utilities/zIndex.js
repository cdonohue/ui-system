export default function generate(config) {
  const { zIndex = {} } = config

  return Object.keys(zIndex).reduce((classes, modifier) => {
    return {
      ...classes,
      [`z-${modifier}`]: [`z-index: ${zIndex[modifier]}`],
    }
  }, {})
}
