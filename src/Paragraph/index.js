import React from "react"
import { css, cx } from "emotion"

import Box from "../Box"

export default function Paragraph(props) {
  const { children, className, ...remainingProps } = props

  return (
    <Box is="p" className={`mb-4 ${className}`} {...remainingProps}>
      {children}
    </Box>
  )
}
