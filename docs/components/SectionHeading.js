import React from "react"

import { Box, Code, Heading, Text } from "../../src"

export default function SectionHeading({ children, pattern }) {
  return (
    <Heading
      is="h4"
      className={`border-b border-gray-300 border-dashed mt-8 mb-4`}
    >
      <Box>{children}</Box>
      {!!pattern && (
        <Code className="text-base px-2 py-1 rounded bg-gray-200">
          {pattern.split("").map((char) => (
            <Text className={`text-gray-${char.match(/[{}|?]/) ? "400" : 600}`}>
              {char}
            </Text>
          ))}
        </Code>
      )}
    </Heading>
  )
}
