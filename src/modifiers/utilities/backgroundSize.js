export default function generate(config) {
  const { backgroundSize = {} } = config

  return Object.keys(backgroundSize).reduce((classNames, modifier) => {
    return {
      ...classNames,
      [`bg-${modifier}`]: [`background-size: ${backgroundSize[modifier]}`],
    }
  }, {})
}
