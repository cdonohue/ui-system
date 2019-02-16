const borderStyles = ["solid", "dashed", "dotted", "none"]

export default function generate() {
  return borderStyles.reduce((classes, style) => {
    return {
      ...classes,
      [`border-${style}`]: [`border-style: ${style}`],
    }
  }, {})
}
