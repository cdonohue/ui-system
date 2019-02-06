import React from "react"
import PropTypes from "prop-types"

import { css, cx } from "emotion"

import modifiers from "../modifiers"
import config from "../modifiers/config"

function generateRandomString() {
  const x = 2147483648
  // Make sure the id starts with an alpha
  return `ui-${Math.floor(Math.random() * x).toString(36) +
    Math.abs(Math.floor(Math.random() * x) ^ Date.now()).toString(36)}`
}

const baseReset = css`
  /* Reset margin, padding, and border */
  margin: 0;
  padding: 0;
  border-width: 0;
  border-style: solid;
  border-color: ${config.borderColors.default};

  /* Typography */
  font-family: inherit;
  font-size: ${config.textSizes.base};
  line-height: inherit;
  vertical-align: baseline;

  /* Layout */
  box-sizing: border-box;
  &:before,
  &:after {
    box-sizing: inherit;
  }
`

function Box(props) {
  const { children, className, tag = "div", ...remainingProps } = props

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
    .map((name) => modifiers[name])
    .join("\n")

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

Box.propTypes = {
  /** HTML tag to render */
  tag: PropTypes.string,
}

export default Box
