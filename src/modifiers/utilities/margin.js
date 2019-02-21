export default function generate(config) {
  const { margin = {}, negativeMargin = {} } = config

  return {
    ...Object.keys(margin).reduce((classNames, modifier) => {
      const size = margin[modifier]

      return {
        ...classNames,
        [`m-${modifier}`]: [`margin: ${size}`],
        [`mx-${modifier}`]: [`margin-left: ${size}`, `margin-right: ${size}`],
        [`my-${modifier}`]: [`margin-top: ${size}`, `margin-bottom: ${size}`],
        [`mt-${modifier}`]: [`margin-top: ${size}`],
        [`mr-${modifier}`]: [`margin-right: ${size}`],
        [`mb-${modifier}`]: [`margin-bottom: ${size}`],
        [`ml-${modifier}`]: [`margin-left: ${size}`],
      }
    }, {}),
    ...Object.keys(negativeMargin).reduce((classNames, modifier) => {
      const size = negativeMargin[modifier]

      return {
        ...classNames,
        [`-m-${modifier}`]: [`margin: -${size}`],
        [`-mx-${modifier}`]: [
          `margin-left: -${size}`,
          `margin-right: -${size};`,
        ],
        [`-my-${modifier}`]: [
          `margin-top: -${size}`,
          `margin-bottom: -${size}`,
        ],
        [`-mt-${modifier}`]: [`margin-top: -${size}`],
        [`-mr-${modifier}`]: [`margin-right: -${size}`],
        [`-mb-${modifier}`]: [`margin-bottom: -${size}`],
        [`-ml-${modifier}`]: [`margin-left: -${size}`],
      }
    }, {}),
  }
}
