import React from "react"
import { Box, Text, Heading, Paragraph } from "../../src"

export default function LetterBox({
  caption,
  example = "Aa",
  modifier,
  value,
}) {
  return (
    <Box className="rounded-lg border font-sans overflow-hidden">
      <Box
        className={`h-32 flex items-center relative justify-center ${modifier}`}
      >
        <Box className="absolute pin-t pin-r m-2 py-1 px-2 rounded-sm bg-gray-200 font-mono text-gray-500 inline-block mt-2 text-xs">
          {value}
        </Box>
        <Box className="mt-6">{example}</Box>
      </Box>
      <Box
        is="code"
        className="bg-gray-200 p-4 font-mono text-gray-600 text-sm block"
      >
        <Box>{modifier}</Box>
      </Box>
    </Box>
  )
}
