import React from "react"
import { Box, Heading } from "../../src"

export default function WidthBox({ widthModifier }) {
  return (
    <Box className="bg-blue-100 p-2 rounded-lg overflow-hidden">
      <Box tag="code" className="font-mono text-blue-500 text-sm block mb-2">
        {widthModifier}
      </Box>
      <Box
        className={`bg-blue-200 rounded border border-blue-400 text-blue-500 h-4 font-mono border-4 ${widthModifier}`}
      />
    </Box>
  )
}
