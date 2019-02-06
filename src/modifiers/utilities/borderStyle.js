const borderStyles = ["solid", "dashed", "dotted", "none"]

export default borderStyles.reduce((classes, style) => {
  return {
    ...classes,
    [`border-${style}`]: [`border-style: ${style}`],
  }
}, {})
