import doczPluginNetlify from "docz-plugin-netlify"

import { colors } from "./src/modifiers/baseConfig"

export default {
  title: "<UI System />",
  description: "UI System documentation",
  codeSandbox: false,
  themeConfig: {
    colors: {
      primary: colors["blue-400"],
      text: colors["black"],
      link: colors["blue-400"],
      footerText: colors["gray-300"],
      sidebarBg: colors["gray-200"],
      sidebarText: colors["gray-700"],
      sidebarHighlight: colors["blue-200"],
      sidebarBorder: colors["gray-300"],
      background: colors["white"],
      border: colors["gray-300"],
      theadColor: colors["gray-600"],
      theadBg: colors["gray-200"],
      tableColor: colors["gray-700"],
      tooltipBg: colors["black"],
      tooltipColor: colors["white"],
      codeBg: colors["gray-200"],
      codeColor: colors["gray-600"],
      preBg: colors["gray-100"],
      blockquoteBg: colors["gray-100"],
      blockquoteBorder: colors["gray-200"],
      blockquoteColor: colors["gray-600"],
    },
    showPlaygroundEditor: true,
  },
  plugins: [doczPluginNetlify()],
}
