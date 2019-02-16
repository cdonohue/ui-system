export default function generate(config) {
  const { textSizes = {} } = config

  return Object.keys(textSizes).reduce((classNames, modifier) => {
    return {
      ...classNames,
      [`text-${modifier}`]: [`font-size: ${textSizes[modifier]}`],
    }
  }, {})
}
