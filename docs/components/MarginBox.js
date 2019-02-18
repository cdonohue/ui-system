import React from "react"
import { Box, Heading } from "../../src"

export default function MarginBox({ caption, pattern, marginModifier }) {
  return (
    <Box className="bg-orange-100 p-2 min-h-32 rounded-lg overflow-hidden">
      <Heading is="h4" className="text-orange-600 text-base bold">
        {caption}
      </Heading>
      <Box is="code" className="font-mono text-orange-600 text-sm block mb-2">
        {pattern}
      </Box>
      <Box className="bg-orange-200 rounded border border-orange-200">
        <Box
          className={`h-8 px-2 bg-white rounded border border-orange-400 border-4 ${marginModifier}`}
        />
      </Box>
    </Box>
  )
}
