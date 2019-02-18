import React from "react"
import { Box, Heading } from "../../src"

export default function FlexBox({ flexModifier, even, stretch }) {
  return (
    <Box className="bg-teal-100 p-2 rounded-lg overflow-hidden">
      <Box is="code" className="font-mono text-teal-500 text-sm block mb-2">
        {flexModifier}
      </Box>
      <Box className={`flex ${flexModifier}`}>
        <Box
          className={`text-sm bold text-teal-600 flex items-center justify-center bg-teal-200 rounded border border-teal-400 text-teal-500 h-8 ${
            stretch ? "w-full" : "w-8"
          } m-1 border-4`}
        >
          1
        </Box>
        <Box
          className={`text-sm bold text-teal-600 flex items-center justify-center bg-teal-200 rounded border border-teal-400 text-teal-500 ${
            even ? "h-8" : "h-16"
          } ${stretch ? "w-full" : "w-8"} m-1 border-4`}
        >
          2
        </Box>
        <Box
          className={`text-sm bold text-teal-600 flex items-center justify-center bg-teal-200 rounded border border-teal-400 text-teal-500 ${
            even ? "h-8" : "h-6"
          } ${stretch ? "w-full" : "w-8"} m-1 border-4`}
        >
          3
        </Box>
      </Box>
    </Box>
  )
}
