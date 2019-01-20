import { VueRemark } from "../types";
/**
 * Import renderers
 */
import CodeBlock from "./code-block.vue";
import Heading from "./heading.vue";
import Html from "./html.vue";
import InlineCode from "./inline-code.vue";
import ListItem from "./list-item.vue";
import List from "./list.vue";
import Root from "./root.vue";
import Text from "./text.vue";

export * from "./helpers";
export const defaultRenderers: VueRemark.Renderers = {
  break: "br",
  paragraph: "p",
  emphasis: "em",
  strong: "strong",
  thematicBreak: "hr",
  blockquote: "blockquote",
  delete: "del",
  link: "a",
  image: "img",
  linkReference: "a",
  imageReference: "img",
  table: "table",
  tableHead: "thead",
  tableBody: "tbody",
  tableRow: "tr",
  tableCell: "td",

  root: Root,
  text: Text,
  list: List,
  listItem: ListItem,
  heading: Heading,
  inlineCode: InlineCode,
  code: CodeBlock,
  html: Html
  // virtualHtml: VirtualHtml,
  // parsedHtml: ParsedHtml
};
