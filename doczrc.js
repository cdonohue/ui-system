import doczPluginNetlify from "docz-plugin-netlify"

import { colors } from "./src/modifiers/config"

export default {
  title: "<UI System />",
  description: "UI System documentation",
  codeSandbox: false,
  themeConfig: {
    colors: {
      primary: colors["blue-400"],
      text: colors["black"],
      link: colors["blue-400"],
      footerText: colors["grey-300"],
      sidebarBg: colors["grey-200"],
      sidebarText: colors["grey-700"],
      // sidebarHighlight: colors["blue-300"],
      sidebarBorder: colors["grey-300"],
      background: colors["white"],
      border: colors["grey-300"],
      theadColor: colors["grey-600"],
      theadBg: colors["grey-200"],
      tableColor: colors["grey-700"],
      tooltipBg: colors["black"],
      tooltipColor: colors["white"],
      codeBg: colors["grey-200"],
      codeColor: colors["grey-600"],
      preBg: colors["grey-100"],
      blockquoteBg: colors["grey-100"],
      blockquoteBorder: colors["grey-200"],
      blockquoteColor: colors["grey-600"],
    },
    showPlaygroundEditor: true,
  },
  plugins: [doczPluginNetlify()],
}
