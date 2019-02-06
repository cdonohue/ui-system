const verticalAlignments = [
  "baseline",
  "top",
  "middle",
  "bottom",
  "text-top",
  "text-bottom",
]

export default verticalAlignments.reduce((classNames, modifier) => {
  return {
    ...classNames,
    [`align-${modifier}`]: [`vertical-align: ${verticalAlignments[modifier]}`],
  }
}, {})
