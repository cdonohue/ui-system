const displayVariants = [
  "block",
  "inline-block",
  "inline",
  "table",
  "table-row",
  "table-cell",
]

export default function generate() {
  return {
    ...displayVariants.reduce(
      (classNames, variant) => ({
        ...classNames,
        [variant]: [`display: ${variant};`],
      }),
      {}
    ),
    hidden: ["display: none"],
  }
}
