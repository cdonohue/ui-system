import React from "react"
import { css, cx } from "emotion"

import Box from "../Box"

const tagStyles = css`
  margin-bottom: 1rem;
`

export default function Paragraph(props) {
  const { className, ...remainingProps } = props

  const explicitStyles = cx(tagStyles, className)

  return (
    <Box tag="p" className={explicitStyles} {...remainingProps}>
      {props.children}
    </Box>
  )
}
