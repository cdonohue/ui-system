import config from "./config"

export default {
  base: [
    "margin: 0",
    "padding: 0",
    "border-width: 0",
    "border-style: solid",
    `border-color: ${config.borderColors.default}`,
    "font-family: inherit",
    "font-size: inherit",
    "font-weight: inherit",
    "line-height: inherit",
    "vertical-align: baseline",
    "box-sizing: border-box",
  ],
}
