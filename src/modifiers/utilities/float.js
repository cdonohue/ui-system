export default {
  "float-right": `
    float: right;
  `,
  "float-left": `
    float: left;
  `,
  "float-none": `
    float: none;
  `,
  clear: `
    &:after {
      content: "";
      display: table;
      clear: both;
    }
  `,
}
