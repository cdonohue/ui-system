export default function generate(config) {
  const { fonts = {} } = config

  return Object.keys(fonts).reduce((classes, modifier) => {
    return {
      ...classes,
      [`font-${modifier}`]: [`font-family: ${fonts[modifier].join(", ")}`],
    }
  }, {})
}
