import React from "react"

import generateModifiers from "../modifiers"
import baseConfig from "../modifiers/config"

const baseModifiers = generateModifiers(baseConfig)

const ConfigContext = React.createContext({
  config: baseConfig,
  modifiers: baseModifiers,
})

export class ConfigProvider extends React.Component {
  state = {
    config: baseConfig,
    modifiers: baseModifiers,
  }

  componentDidMount() {
    const { config: configFn } = this.props

    if (configFn) {
      const providedConfig = configFn(baseConfig)

      this.setState({
        config: providedConfig,
        modifiers: generateModifiers(providedConfig),
      })
    }
  }

  render() {
    const { children } = this.props

    return (
      <ConfigContext.Provider value={this.state}>
        {children}
      </ConfigContext.Provider>
    )
  }
}

export const ConfigConsumer = ConfigContext.Consumer
