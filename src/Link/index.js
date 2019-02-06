import React from "react"
import PropTypes from "prop-types"
import { css, cx } from "emotion"

import Box from "../Box"

const tagStyles = css`
  color: #007bff;
  text-decoration: none;
  background-color: transparent;

  &:visited {
    color: inherit;
  }

  &:hover {
    color: #0056b3;
    text-decoration: underline;
  }

  &:not([href]):not([tabindex]) {
    color: inherit;
    text-decoration: none;
  }

  &:not([href]):not([tabindex]):hover,
  &:not([href]):not([tabindex]):focus {
    color: inherit;
    text-decoration: none;
  }

  &:not([href]):not([tabindex]):focus {
    outline: 0;
  }
`

function Link(props) {
  const { className, ...remainingProps } = props

  const explicitStyles = cx(tagStyles, className)

  return (
    <Box tag="a" className={explicitStyles} {...remainingProps}>
      {props.children}
    </Box>
  )
}

Link.propTypes = {
  href: PropTypes.string.isRequired
}

export default Link
