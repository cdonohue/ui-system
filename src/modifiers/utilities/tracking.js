export default function generate(config) {
  const { tracking = {} } = config

  return Object.keys(tracking).reduce((classes, modifier) => {
    return {
      ...classes,
      [`tracking-${modifier}`]: [`letter-spacing: ${tracking[modifier]}`],
    }
  }, {})
}
