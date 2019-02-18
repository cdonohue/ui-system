import React from "react"
import PropTypes from "prop-types"
import { css, cx } from "emotion"

import Box from "../Box"

const tagStyles = css`
  height: auto;
  max-width: 100%;
  vertical-align: middle;
  border-style: none;
`

function Image(props) {
  const { className, ...remainingProps } = props

  const explicitStyles = cx(tagStyles, className)

  return (
    <Box is="img" className={explicitStyles} {...remainingProps}>
      {props.children}
    </Box>
  )
}

Image.propTypes = {
  /** Source url of the image to be rendered */
  src: PropTypes.string.isRequired,
}

export default Image
