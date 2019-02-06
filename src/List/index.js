import React from "react"
import PropTypes from "prop-types"
import { css, cx } from "emotion"

import Box from "../Box"

const tagStyles = css`
  /* list-style: none; */
  margin-top: 0;
  margin-bottom: 1rem;

  & ul,
  & ol {
    margin-bottom: 0;
  }
`

function List(props) {
  const { className, is: listVariant, ...remainingProps } = props

  const explicitStyles = cx(tagStyles, className)

  return (
    <Box
      tag={listVariant}
      className={explicitStyles}
      {...remainingProps}
    >
      {props.children}
    </Box>
  )
}

List.propTypes = {
  /** HTML list variant (ol, ul) */
  is: PropTypes.oneOf(["ol","ul"]).isRequired
}

export default List