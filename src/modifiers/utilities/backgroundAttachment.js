const backgroundAttachment = {
  "bg-fixed": ["background-attachment: fixed"],
  "bg-local": ["background-attachment: local"],
  "bg-scroll": ["background-attachment: scroll"],
}

export default function generate() {
  return Object.keys(backgroundAttachment).reduce((rules, key) => {
    return {
      ...rules,
      [key]: backgroundAttachment[key],
    }
  }, {})
}
