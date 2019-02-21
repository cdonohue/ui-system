export default function generate(config) {
  const { lineHeights = {} } = config

  return Object.keys(lineHeights).reduce((classes, modifier) => {
    return {
      ...classes,
      [`leading-${modifier}`]: [`line-height: ${lineHeights[modifier]}`],
    }
  }, {})
}
