import padding from "./padding"
import backgroundColors from "./backgroundColors"
import textColors from "./textColors"
import shadows from "./shadows"
import borderRadius from "./borderRadius"
import margin from "./margin"
import float from "./float"
import flexbox from "./flexbox"
import display from "./display"
import textAlign from "./textAlign"
import width from "./width"
import overflow from "./overflow"
import appearance from "./appearance"
import borderColors from "./borderColors"
import borderStyle from "./borderStyle"
import borderWidths from "./borderWidths"
import fontWeights from "./fontWeights"
import textSizes from "./textSizes"
import textStyle from "./textStyle"
import leading from "./leading"
import tracking from "./tracking"
import height from "./height"
import backgroundAttachment from "./backgroundAttachment"
import backgroundPosition from "./backgroundPosition"
import backgroundRepeat from "./backgroundRepeat"
import backgroundSize from "./backgroundSize"
import textShadow from "./textShadow"
import fonts from "./fonts"
import position from "./position"
import cursor from "./cursor"
import opacity from "./opacity"
import outline from "./outline"
import pointerEvents from "./pointerEvents"
import verticalAlign from "./verticalAlign"
import visibility from "./visibility"
import whitespace from "./whitespace"
import zIndex from "./zIndex"
import resize from "./resize"
import lists from "./lists"

const utilities = [
  appearance,
  backgroundAttachment,
  backgroundColors,
  backgroundPosition,
  backgroundRepeat,
  backgroundSize,
  borderColors,
  borderRadius,
  borderStyle,
  borderWidths,
  cursor,
  display,
  flexbox,
  float,
  fonts,
  fontWeights,
  height,
  leading,
  lists,
  margin,
  opacity,
  outline,
  overflow,
  padding,
  pointerEvents,
  position,
  resize,
  shadows,
  textAlign,
  textColors,
  textShadow,
  textSizes,
  textStyle,
  tracking,
  verticalAlign,
  visibility,
  whitespace,
  width,
  zIndex,
]

export default function generateUtilities(config) {
  return utilities.reduce((classRules, utilityFn) => {
    return {
      ...classRules,
      ...utilityFn(config),
    }
  }, {})
}
