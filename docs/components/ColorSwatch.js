import React from "react"
import { Box, ConfigConsumer } from "../../src"
import polychrome from "polychrome"

export default function ColorSwatch(props) {
  return (
    <ConfigConsumer>
      {({ config }) => {
        const { color } = props

        const hex = config.colors[`${color}-400`] || config.colors[`${color}`]

        const relatedColors = Object.keys(config.colors).filter(
          (colorName) => colorName.includes(color) && color !== colorName
        )

        const contrast = polychrome(hex)
          .contrast()
          .hex()

        function renderRelatedColors() {
          if (relatedColors.length > 1) {
            return (
              <Box className="flex flex-col">
                {relatedColors.map((relatedColor) => {
                  const hex = config.colors[relatedColor]

                  const [name, level] = relatedColor.split("-")

                  const contrast = polychrome(hex)
                    .contrast()
                    .hex()

                  return (
                    <Box
                      key={relatedColor}
                      className={`flex-grow bg-${relatedColor} w-full max-w-xs`}
                    >
                      <Box
                        className={`px-2 pl-6 py-1 text-sm text-${
                          contrast === "#FFFFFF" ? "white" : "black"
                        }`}
                      >
                        {level}
                      </Box>
                    </Box>
                  )
                })}
              </Box>
            )
          }
        }

        return (
          <Box className="rounded overflow-hidden shadow-md flex">
            <Box className={`flex-grow relative shadow flex flex-col`}>
              <Box
                className={`flex-grow h-24 flex flex-col justify-end items-start bg-${color}-400 bg-${color}`}
              >
                <Box
                  className={`p-2 capitalize bold text-shadow text-${
                    contrast === "#FFFFFF" ? "white" : "black"
                  }`}
                >
                  {color}
                </Box>
              </Box>
              <Box
                style={{
                  boxShadow:
                    color === "white" ? "inset 0 1px rgba(0,0,0,.06)" : "",
                }}
                className={`flex p-2 items-center`}
              >
                <Box
                  className={`w-2 h-2 mr-1 shadow-inner rounded-full bg-${color}-400 bg-${color}`}
                />
                <Box className="text-sm uppercase">{hex}</Box>
              </Box>
            </Box>

            {renderRelatedColors()}
          </Box>
        )
      }}
    </ConfigConsumer>
  )
}
