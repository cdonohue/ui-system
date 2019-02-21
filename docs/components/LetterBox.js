import React from "react"
import { Box, Heading, Paragraph } from "../../src"

export default function LetterBox({
  caption,
  example = "The face of the moon was in shadow.",
  modifier,
}) {
  return (
    <Box className="bg-purple-100 p-2 rounded-lg">
      <Box is="code" className="font-mono text-purple-600 text-sm block">
        {modifier}
      </Box>
      <Box className={`bg-white p-2 rounded mt-2 text-shadow ${modifier}`}>
        {example}
      </Box>
    </Box>
  )
}
