import React from "react"

import Box from "../Box"

export default function Li(props) {
  return (
    <Box is="li" {...props}>
      {props.children}
    </Box>
  )
}
