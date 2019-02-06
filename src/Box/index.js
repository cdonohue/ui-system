import React from "react"
import PropTypes from "prop-types"

import { css, cx } from "emotion"

import modifiers from "../modifiers"
import config from "../modifiers/config"
import reset from "../modifiers/reset"

function generateRandomString() {
  const x = 2147483648
  // Make sure the id starts with an alpha
  return `ui-${Math.floor(Math.random() * x).toString(36) +
    Math.abs(Math.floor(Math.random() * x) ^ Date.now()).toString(36)}`
}

function mapRules(rules, isImportant = false) {
  console.log(rules)
  return rules.map((rule) => {
    return isImportant ? `${rule} !important;` : `${rule};`
  })
}

function Box(props) {
  const {
    children,
    className,
    isLocked,
    tag = "div",
    ...remainingProps
  } = props

  const uniqueId = generateRandomString()

  remainingProps.id = uniqueId

  const generatedClasses = (className || "")
    .split(" ")
    .filter((name) => name.match(/^css-/))

  const userClasses = (className || "")
    .split(" ")
    .filter((name) => !name.match(/^css-/))

  const activeModifiers = userClasses
    .filter((name) => modifiers[name])
    .map((name) => mapRules(modifiers[name], isLocked).join(""))
    .join("")

  const baseReset = mapRules(reset.base, isLocked).join("")

  const normalizedStyles = css`
    ${tag}#${uniqueId}& {
      ${baseReset}
      ${generatedClasses}
      ${activeModifiers}
    }
  `

  remainingProps.className = cx(normalizedStyles, userClasses)

  return React.createElement(tag, remainingProps, children)
}

Box.defaultProps = {
  tag: "div",
}

Box.propTypes = {
  /** HTML tag to render */
  tag: PropTypes.string,
}

export default Box
