export default function generate(config) {
  const { height = {}, maxHeight = {}, minHeight = {} } = config

  return {
    ...Object.keys(height).reduce((classes, modifier) => {
      return {
        ...classes,
        [`h-${modifier}`]: [`height: ${height[modifier]}`],
      }
    }, {}),
    ...Object.keys(maxHeight).reduce((classes, modifier) => {
      return {
        ...classes,
        [`max-h-${modifier}`]: [`max-height: ${maxHeight[modifier]}`],
      }
    }, {}),
    ...Object.keys(minHeight).reduce((classes, modifier) => {
      return {
        ...classes,
        [`min-h-${modifier}`]: [`min-height: ${minHeight[modifier]}`],
      }
    }, {}),
  }
}
