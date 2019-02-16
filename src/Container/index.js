import React from "react"
import PropTypes from "prop-types"

import Box from "../Box"

function Container(props) {
  const { children, is = "div", ...remainingProps } = props

  return (
    <Box tag={is} {...remainingProps}>
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
