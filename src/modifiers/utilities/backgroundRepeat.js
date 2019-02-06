const backgroundRepeat = {
  "bg-repeat": "background-repeat: repeat;",
  "bg-no-repeat": "background-repeat: no-repeat;",
  "bg-repeat-x": "background-repeat: repeat-x;",
  "bg-repeat-y": "background-repeat: repeat-y;",
}

export default Object.keys(backgroundRepeat).reduce((rules, key) => {
  return {
    ...rules,
    [key]: backgroundRepeat[key],
  }
}, {})
