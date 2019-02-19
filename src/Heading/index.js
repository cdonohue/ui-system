import React from "react"
import PropTypes from "prop-types"

import Box from "../Box"

const sizeLookup = {
  h1: "text-4xl",
  h2: "text-3xl",
  h3: "text-2xl",
  h4: "text-xl",
  h5: "text-lg",
  h6: "text-base",
}

function Heading(props) {
  const { children, className, ...remainingProps } = props

  return (
    <Box
      className={`my-0 ${sizeLookup[props.is]} ${className}`}
      {...remainingProps}
    >
      {children}
    </Box>
  )
}

Heading.propTypes = {
  /** HTML heading variant (h1, h2, etc) */
  is: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]).isRequired,
}

export default Heading
