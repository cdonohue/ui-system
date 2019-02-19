import React from "react"
import PropTypes from "prop-types"

import Box from "../Box"

function Text(props) {
  const { children, className, ...remainingProps } = props

  return (
    <Box className={`inline-block ${className}`} {...remainingProps}>
      {children}
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
