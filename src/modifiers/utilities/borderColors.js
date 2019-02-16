export default function generate(config) {
  const { borderColors = {} } = config

  return Object.keys(borderColors).reduce((classes, modifier) => {
    return {
      ...classes,
      [`border-${modifier}`]: [`border-color: ${borderColors[modifier]}`],
    }
  }, {})
}
