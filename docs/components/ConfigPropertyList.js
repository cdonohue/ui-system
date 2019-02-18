import React from "react"
import { Box, ConfigConsumer } from "../../src"

export default function ConfigPropertyList({ property }) {
  return (
    <ConfigConsumer>
      {({ config }) => (
        <Box className="flex flex-wrap my-4">
          {Object.keys(config[property]).map((key) => {
            return (
              <Box className="flex flex-column rounded-sm font-mono text-sm overflow-hidden mr-2 mb-2">
                <Box className="bg-grey-300 px-2">{key}</Box>
                <Box className="bg-grey-200 px-3">{config[property][key]}</Box>
              </Box>
            )
          })}
        </Box>
      )}
    </ConfigConsumer>
  )
}
