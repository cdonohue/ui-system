import React from "react"
import PropTypes from "prop-types"
import { css } from "emotion"

import reset from "../modifiers/reset"
import { ConfigConsumer } from "../ConfigContext"

function mapRules(rules, isImportant = false) {
  return rules.map((rule) => {
    return isImportant ? `${rule} !important;` : `${rule};`
  })
}

function getActiveModifiers(classList, modifiers) {
  return classList.split(" ").filter((name) => modifiers[name])
}

function Box(props) {
  const {
    children,
    className = "",
    important,
    tag = "div",
    ...remainingProps
  } = props

  return (
    <ConfigConsumer>
      {({ config, modifiers }) => {
        // Get base reset
        const baseReset = mapRules(reset.base, important).join("")

        // Get array of active modifiers
        const activeModifiers = getActiveModifiers(className, modifiers)

        const classList = className
          .split(" ")
          .filter((className) => activeModifiers.indexOf(className) === -1)
          .join(" ")

        const activeModifierRules = activeModifiers.map((name) =>
          mapRules(modifiers[name], important).join("")
        )

        // Check for id and bundle styles together
        if (remainingProps.id) {
          const normalizedStyles = css`
            ${tag}#${remainingProps.id}& {
              ${baseReset}
              ${activeModifierRules.join("")}
            }
          `
          remainingProps.className = `${normalizedStyles} ${classList}`.trim()
        } else {
          // Single out the base reset
          const baseResetClass = css`
            ${baseReset}
          `

          // Single out each of the modifiers
          const activeModifierClasses = activeModifierRules.map(
            (rules) =>
              css`
                ${rules}
              `
          )

          remainingProps.className = `${baseResetClass} ${activeModifierClasses.join(
            " "
          )} ${classList}`.trim()
        }
        return React.createElement(tag, remainingProps, children)
      }}
    </ConfigConsumer>
  )
}

Box.defaultProps = {
  tag: "div",
  important: false,
}

Box.propTypes = {
  /** Appends !important to all css rules */
  important: PropTypes.bool,
  /** HTML tag to render */
  tag: PropTypes.string,
}

export default Box
