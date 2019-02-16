export default function generate(config) {
  const { leading = {} } = config

  return Object.keys(leading).reduce((classes, modifier) => {
    return {
      ...classes,
      [`leading-${modifier}`]: [`line-height: ${leading[modifier]}`],
    }
  }, {})
}
