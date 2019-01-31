import { Renderers } from "../types";
import VueRemarkCodeBlock from "./code-block.vue";
import VueRemarkHeading from "./heading.vue";
import VueRemarkHtml from "./html.vue";
import VueRemarkInlineCode from "./inline-code.vue";
import VueRemarkListItem from "./list-item.vue";
import VueRemarkList from "./list.vue";
import VueRemarkRoot from "./root.vue";
import VueRemarkText from "./text.vue";

export const defaultRenderers: Renderers = {
  blockquote: "blockquote",
  break: "br",
  code: VueRemarkCodeBlock,
  definition() {},
  delete: "del",
  emphasis: "em",
  heading: VueRemarkHeading,
  html: VueRemarkHtml,
  image: "img",
  imageReference: "img",
  inlineCode: VueRemarkInlineCode,
  link: "a",
  linkReference: "a",
  list: VueRemarkList,
  listItem: VueRemarkListItem,
  paragraph: "p",
  root: VueRemarkRoot,
  strong: "strong",
  table: "table",
  tableBody: "tbody",
  tableCell: "td",
  tableHead: "thead",
  tableRow: "tr",
  text: VueRemarkText,
  thematicBreak: "hr"
};
