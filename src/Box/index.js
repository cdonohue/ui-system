import React from "react"
import PropTypes from "prop-types"
import { css } from "emotion"

import { ConfigConsumer } from "../ConfigContext"

function mapRules(rules = [], isImportant = false) {
  return rules.map((rule) => {
    return isImportant ? `${rule} !important;` : `${rule};`
  })
}

function getActiveModifiers(classList, modifiers, composites) {
  const activeComposites = classList
    .split(" ")
    .filter((name) => composites[name])

  return classList
    .split(" ")
    .filter((name) => modifiers[name])
    .concat(
      activeComposites.reduce((allComposites, composite) => {
        return allComposites.concat(composites[composite])
      }, [])
    )
}

function Box(props) {
  const {
    children,
    className = "",
    important,
    is = "div",
    ...remainingProps
  } = props

  return (
    <ConfigConsumer>
      {({ config, modifiers }) => {
        const { composites = {}, resets = {} } = config
        // Get base reset
        const baseReset = mapRules(resets.base, important).join("")

        // Get array of active modifiers
        const activeModifiers = getActiveModifiers(
          className,
          modifiers,
          composites
        )

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
            #${remainingProps.id}& {
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

        return React.createElement(is, remainingProps, children)
      }}
    </ConfigConsumer>
  )
}

Box.defaultProps = {
  is: "div",
  important: false,
}

Box.propTypes = {
  /** Appends !important to all css rules */
  important: PropTypes.bool,
  /** HTML tag/ React component to render */
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
}

export default Box
