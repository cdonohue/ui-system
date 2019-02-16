import generateUtilities from "./utilities"
import generateStates from "./states"

export default function generateModifiers(config) {
  const utilities = generateUtilities(config)

  return {
    ...utilities,
    ...generateStates(utilities),
  }
}
