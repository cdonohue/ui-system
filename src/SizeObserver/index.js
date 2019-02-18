import React from "react"
import ReactDOM from "react-dom"
import ResizeObserver from "resize-observer-polyfill"

let observer

function getObserver(fn) {
  if (!observer) {
    observer = new ResizeObserver(fn)
  }

  return observer
}

const elementMap = new WeakMap()

export default class SizeObserver extends React.Component {
  state = {
    width: null,
    height: null,
    x: null,
    y: null,
    top: null,
    right: null,
    bottom: null,
    left: null,
  }

  componentDidMount() {
    this.elementNode = ReactDOM.findDOMNode(this)

    elementMap.set(this.elementNode, this)

    const observeFn = (entries) => {
      entries.forEach((entry) => {
        const {
          width,
          height,
          x,
          y,
          top,
          right,
          bottom,
          left,
        } = entry.contentRect

        const component = elementMap.get(entry.target)

        component.setState({
          width,
          height,
          x,
          y,
          top,
          right,
          bottom,
          left,
        })
      })
    }

    this.ro = getObserver(observeFn)

    this.ro.observe(this.elementNode)
  }

  componentWillUnmount() {
    this.ro.unobserve(this.elementNode)
  }

  render() {
    return this.props.children(this.state)
  }
}
