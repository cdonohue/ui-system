const textStyles = {
  "text-italic": ["font-style: italic"],
  "text-normal": ["font-style: normal"],
  uppercase: ["text-transform: uppercase"],
  lowercase: ["text-transform: lowercase"],
  capitalize: ["text-transform: capitalize"],
  "normal-case": ["text-transform: none"],
  underline: ["text-decoration: underline"],
  "line-through": ["text-decoration: line-through"],
  "no-underline": ["text-decoration: none"],
  antialiased: [
    "-webkit-font-smoothing: antialiased",
    "-moz-osx-font-smoothing: antialiased",
  ],
  "subpixel-antialiased": [
    "-webkit-font-smoothing: auto",
    "-moz-osx-font-smoothing: auto",
  ],
}

export default Object.keys(textStyles).reduce((rules, key) => {
  return {
    ...rules,
    [key]: textStyles[key],
  }
}, {})
