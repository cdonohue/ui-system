import React from "react"
import { Box, Heading, Paragraph, Code } from "../../src"

const defaultExample = `The quick brown fox jumps over the lazy dog`

export default function FontBox({
  caption,
  example = defaultExample,
  modifier,
  fonts = [],
}) {
  return (
    <Box>
      <Box className="text-base border rounded-lg overflow-hidden">
        <Box className={`p-4 ${modifier}`}>{example}</Box>
        <Box className="bg-gray-200 p-4">
          <Box is="code" className="border-b pb-2 font-mono text-sm block">
            {modifier}
          </Box>
          <Box className="mt-2">
            {fonts.map((font) => (
              <Code className="px-2 py-1 text-xs bg-white border border-gray-200 inline-block rounded mb-1 mr-1">
                {font}
              </Code>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
