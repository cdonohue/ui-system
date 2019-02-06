import { transitionDurations } from "../config"

const transitionTimingFunctions = ["ease", "ease-in", "ease-out", "ease-in-out"]

export default {
  ...Object.keys(transitionDurations).reduce((classNames, key) => {
    return {
      ...classNames,
      [`transition-${key}`]: `transition-duration: ${
        transitionDurations[key]
      };`,
    }
  }, {}),
  ...transitionTimingFunctions.reduce((classNames, key) => {
    return {
      ...classNames,
      [`transition-${key}`]: `transition-timing-function: ${key};`,
    }
  }, {}),
}
