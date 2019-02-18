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
  const { ordered = false, ...remainingProps } = props

  return (
    <Box is={ordered ? "ol" : "ul"} {...remainingProps}>
      {props.children}
    </Box>
  )
}

List.propTypes = {
  /** Determines whether a ul or ol is rendered */
  ordered: PropTypes.bool,
}

export default List
