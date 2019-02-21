import React from "react"
import { Box, ConfigConsumer, Text } from "../../src"

export default function ConfigPropertyList({ property }) {
  return (
    <ConfigConsumer>
      {({ config }) => (
        <Box className="my-4">
          <Box className="mb-4 text-gray-600">
            <Text className="capitalize">{property}</Text> sizes
          </Box>
          <Box className="flex flex-wrap">
            {Object.keys(config.baseValues[property]).map((key) => {
              return (
                <Box className="flex flex-column rounded-sm font-mono text-sm overflow-hidden mr-2 mb-2">
                  <Box className="bg-gray-500 px-2 text-white">{key}</Box>
                  <Box className="bg-gray-300 px-3">
                    {config.baseValues[property][key]}
                  </Box>
                </Box>
              )
            })}
          </Box>
        </Box>
      )}
    </ConfigConsumer>
  )
}
