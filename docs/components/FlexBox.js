import React from "react"
import { Box, Heading } from "../../src"

const heights = [8, 16, 12]

export default function FlexBox({ flexModifier, even, stretch, count = 3 }) {
  return (
    <Box className="bg-teal-100 p-2 rounded-lg overflow-hidden">
      <Box is="code" className="font-mono text-teal-500 text-sm block mb-2">
        {flexModifier}
      </Box>
      <Box className={`flex ${flexModifier}`}>
        {!!count &&
          Array.from({ length: count }).map((item, i) => (
            <Box
              className={`text-sm bold text-teal-600 flex items-center justify-center bg-teal-200 rounded border border-teal-400 text-teal-500 h-8 ${
                stretch ? "w-auto" : "w-8"
              } ${even ? "h-8" : `h-${heights[i]}`} m-1 border-4`}
            >
              {i + 1}
            </Box>
          ))}
      </Box>
    </Box>
  )
}
