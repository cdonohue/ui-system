import React from "react"
import { cx } from "emotion"

import Box from "../Box"

export default function Li(props) {
  const { className, ...remainingProps } = props

  const explicitStyles = cx(className)

  return (
    <Box
      tag="li"
      className={explicitStyles}
      {...remainingProps}
    >
      {props.children}
    </Box>
  )
}