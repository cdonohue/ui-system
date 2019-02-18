import React from "react"
import PropTypes from "prop-types"
import { css, cx } from "emotion"

import Box from "../Box"

const tagStyles = css`
  display: inline-block;
`

function Text(props) {
  const { className, is: textVariant = "span", ...remainingProps } = props

  const explicitStyles = cx(tagStyles, className)

  return (
    <Box is={textVariant} className={explicitStyles} {...remainingProps}>
      {props.children}
    </Box>
  )
}

Text.propTypes = {
  /** HTML section variant (article, aside, etc) */
  is: PropTypes.oneOf([
    "abbr",
    "b",
    "br",
    "cite",
    "code",
    "dfn",
    "em",
    "i",
    "kbd",
    "mark",
    "q",
    "s",
    "small",
    "span",
    "strong",
  ]).isRequired,
}

export default Text
