import React from "react"
import { Box, Heading } from "../../src"

export default function RadiusBox({ caption, radiusModifier }) {
  return (
    <Box className="bg-red-100 p-2 min-h-32 rounded-lg overflow-hidden">
      <Heading is="h4" className="text-red-600 text-base bold">
        {caption}
      </Heading>
      <Box is="code" className="font-mono text-red-600 text-sm block mb-2">
        {radiusModifier}
      </Box>
      <Box
        className={`h-8 px-2 bg-red-200 border-4 border-red-300 ${radiusModifier}`}
      />
    </Box>
  )
}
