import { borderWidths } from "../config"

export default Object.keys(borderWidths).reduce((classes, size) => {
  const modifier = size === "default" ? "" : `-${size}`

  return {
    ...classes,
    [`border${modifier}`]: `
      border-width: ${borderWidths[size]}   
    `,
    [`border-t${modifier}`]: `
      border-top-width: ${borderWidths[size]} 
    `,
    [`border-r${modifier}`]: `     
      border-right-width: ${borderWidths[size]}    
    `,
    [`border-b${modifier}`]: `
      border-bottom-width: ${borderWidths[size]}
    `,
    [`border-l${modifier}`]: `
      border-left-width: ${borderWidths[size]}     
    `,
  }
}, {})
