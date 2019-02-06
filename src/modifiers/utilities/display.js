const displayVariants = [
  "block",
  "inline-block",
  "inline",
  "table",
  "table-row",
  "table-cell",
]

export default {
  ...displayVariants.reduce(
    (classNames, variant) => ({
      ...classNames,
      [variant]: [`display: ${variant};`],
    }),
    {}
  ),
  hidden: ["display: none"],
}
