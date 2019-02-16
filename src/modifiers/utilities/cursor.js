const cursorVariants = [
  "auto",
  "default",
  "pointer",
  "wait",
  "move",
  "not-allowed",
]

export default function generate() {
  return Object.keys(cursorVariants).reduce((classNames, variant) => {
    return {
      ...classNames,
      [`cursor-${variant}`]: [`cursor: ${cursorVariants[variant]}`],
    }
  }, {})
}
