import React from "react"
import { css, cx } from "emotion"

import Box from "../Box"

const isStyles = css`
  margin-bottom: 1rem;
`

export default function Paragraph(props) {
  const { className, ...remainingProps } = props

  const explicitStyles = cx(isStyles, className)

  return (
    <Box is="p" className={explicitStyles} {...remainingProps}>
      {props.children}
    </Box>
  )
}
