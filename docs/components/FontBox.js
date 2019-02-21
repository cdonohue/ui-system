import React from "react"
import { Box, Heading, Paragraph } from "../../src"

const defaultExample = `Cronut cray knausgaard banh mi, cred dreamcatcher affogato listicle
snackwave brooklyn cloud bread VHS la croix hashtag selvage.`

export default function FontBox({
  caption,
  example = defaultExample,
  modifier,
}) {
  return (
    <Box className="text-pink-600 text-base bg-pink-100 p-2 rounded-lg">
      <Box is="code" className="font-mono text-sm block">
        {modifier}
      </Box>

      <Box className={`bg-white p-2 rounded text-pink-600 mt-2 ${modifier}`}>
        {example}
      </Box>
    </Box>
  )
}
