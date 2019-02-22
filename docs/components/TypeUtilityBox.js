import React from "react"
import { Box, Text, Heading, Paragraph, Code } from "../../src"

const defaultExample = `The face of the moon was in shadow.`

export default function TypeUtilityBox({
  caption,
  example = defaultExample,
  modifier,
  value = "",
}) {
  return (
    <Box>
      <Box className="text-base font-sans border rounded-lg overflow-hidden">
        <Box className={`p-4 ${modifier}`}>{example}</Box>
        <Box
          is="code"
          className="bg-gray-200 flex justify-between items-center p-4 font-mono text-gray-600 text-sm block"
        >
          <Text>{modifier}</Text>
          <Text className="py-1 px-2 rounded bg-white">{value}</Text>
        </Box>
      </Box>
    </Box>
  )
}
