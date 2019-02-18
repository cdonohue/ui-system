import React from "react"
import PropTypes from "prop-types"
import { css, cx } from "emotion"

import Box from "../Box"

const tagStyles = css`
  margin-top: 0;
  margin-bottom: 0;
`

const sizeLookup = {
  h1: "text-4xl",
  h2: "text-3xl",
  h3: "text-2xl",
  h4: "text-xl",
  h5: "text-lg",
  h6: "text-base",
}

function Heading(props) {
  const { className, is: headingVariant, ...remainingProps } = props

  const explicitStyles = cx(tagStyles, sizeLookup[headingVariant], className)

  return (
    <Box is={headingVariant} className={explicitStyles} {...remainingProps}>
      {props.children}
    </Box>
  )
}

Heading.propTypes = {
  /** HTML heading variant (h1, h2, etc) */
  is: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]).isRequired,
}

export default Heading
