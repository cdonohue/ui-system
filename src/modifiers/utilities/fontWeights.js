export default function generate(config) {
  const { fontWeights = {} } = config

  return Object.keys(fontWeights).reduce((classNames, modifier) => {
    return {
      ...classNames,
      [`${modifier}`]: [`font-weight: ${fontWeights[modifier]}`],
    }
  }, {})
}
