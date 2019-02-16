export default function generate(config) {
  const { backgroundColors = {} } = config

  return Object.keys(backgroundColors).reduce((classNames, modifier) => {
    return {
      ...classNames,
      [`bg-${modifier}`]: [`background-color: ${backgroundColors[modifier]}`],
    }
  }, {})
}
