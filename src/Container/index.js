import React from "react"
import PropTypes from "prop-types"

import Box from "../Box"

function Container(props) {
  const { children, className, ...remainingProps } = props

  return (
    <Box className={`block ${className}`} {...remainingProps}>
      {children}
    </Box>
  )
}

Container.defaultProps = {
  is: "div",
}

Container.propTypes = {
  /** HTML section variant (article, aside, etc) */
  is: PropTypes.string.isRequired,
}

export default Container
