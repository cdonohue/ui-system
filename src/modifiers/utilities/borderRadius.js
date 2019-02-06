import { borderRadius } from "../config"

export default Object.keys(borderRadius).reduce((classNames, key) => {
  const modifier = key === "default" ? "" : `-${key}`
  const size = borderRadius[key]

  return {
    ...classNames,
    [`rounded${modifier}`]: `border-radius: ${size};`,
    [`rounded-t${modifier}`]: `   
      border-top-left-radius: ${size};
      border-top-right-radius: ${size};
    `,
    [`rounded-r${modifier}`]: `   
      border-top-right-radius: ${size};
      border-bottom-right-radius: ${size};
    `,
    [`rounded-b${modifier}`]: `   
      border-bottom-right-radius: ${size};
      border-bottom-left-radius: ${size};
    `,
    [`rounded-l${modifier}`]: `    
      border-bottom-left-radius: ${size};
      border-top-left-radius: ${size};
    `,
    [`rounded-tl${modifier}`]: `   
      border-top-left-radius: ${size};
    `,
    [`rounded-tr${modifier}`]: `   
      border-top-right-radius: ${size}; 
    `,
    [`rounded-br${modifier}`]: `     
      border-bottom-right-radius: ${size};
    `,
    [`rounded-bl${modifier}`]: `   
      border-bottom-left-radius: ${size};
    `,
  }
}, {})
