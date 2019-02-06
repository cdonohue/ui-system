import { backgroundSize } from "../config"

export default Object.keys(backgroundSize).reduce((classNames, modifier) => {
  return {
    ...classNames,
    [`bg-${modifier}`]: `background-size: ${backgroundSize[modifier]};`,
  }
}, {})
