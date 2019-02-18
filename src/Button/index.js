import React from "react"
import PropTypes from "prop-types"
import { css, cx } from "emotion"

import Box from "../Box"

const tagStyles = css`
  border: none;
  display: inline-block;
  background: transparent;
  padding: 0;

  &:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
  }

  cursor: pointer;
`

function Button(props) {
  const { className, ...remainingProps } = props

  const explicitStyles = cx(tagStyles, className)

  return (
    <Box is="button" className={explicitStyles} {...remainingProps}>
      {props.children}
    </Box>
  )
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
}

export default Button
