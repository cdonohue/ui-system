import React from "react"

import { Heading } from "../../src"

export default function SectionHeading({
  children,
  className,
  ...remainingProps
}) {
  return (
    <Heading
      is="h4"
      className={`flex items-center border-b border-grey-300 border-dashed mb-4 ${className}`}
      {...remainingProps}
    >
      {children}
    </Heading>
  )
}
