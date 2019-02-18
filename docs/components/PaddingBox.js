import React from "react"
import { Box, Heading } from "../../src"

export default function PaddingBox({ caption, pattern, paddingModifier }) {
  return (
    <Box className="bg-green-100 p-2 min-h-32 rounded-lg overflow-hidden">
      <Heading is="h4" className="text-green-600 text-base bold">
        {caption}
      </Heading>
      <Box is="code" className="font-mono text-green-600 text-sm block mb-2">
        {pattern}
      </Box>
      <Box
        className={`bg-green-200 rounded border border-green-400 border-4 ${paddingModifier}`}
      >
        <Box className="h-8 bg-white" />
      </Box>
    </Box>
  )
}
