export default function generate(config) {
  const { textColors = {} } = config

  return Object.keys(textColors).reduce((classNames, modifier) => {
    return {
      ...classNames,
      [`text-${modifier}`]: [`color: ${textColors[modifier]}`],
    }
  }, {})
}
