import React from "react"

import Box from "../Box"

export default function Code(props) {
  const { className, children, ...remainingProps } = props

  return (
    <Box is="code" className={`font-mono ${className}`} {...remainingProps}>
      {children}
    </Box>
  )
}
