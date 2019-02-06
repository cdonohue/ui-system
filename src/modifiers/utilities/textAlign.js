const alignments = {
  "text-left": "text-align: left;",
  "text-right": "text-align: right;",
  "text-center": "text-align: center;",
  "text-justify": "text-align: justify;",
}

export default Object.keys(alignments).reduce((rules, key) => {
  return {
    ...rules,
    [key]: `${alignments[key]}`,
  }
}, {})
