import flatMap from "lodash.flatmap";
import get from "lodash.get";
import { CreateElement, VNode } from "vue";
import {
  Definitions,
  Node,
  NodeDataAndChildren,
  Options,
  Parent,
  Renderer,
} from "./types";

export function astToVNode(
  createElement: CreateElement,
  node: Node,
  options: Options,
  parent?: Parent,
  index = 0,
): VNode {
  const renderer = options.renderers[node.type];
  const rendererType = typeof renderer;

  if (rendererType !== "string" && rendererType !== "function") {
    throw new Error(
      `Invalid renderer for ${node.type}. Expected string or function got ${rendererType}`,
    );
  }

  const key = getNodeKey(node);
  const { nodeData, children } = getNodeData(
    createElement,
    node,
    key,
    options,
    renderer,
    parent,
    index,
  );

  return createElement(renderer, nodeData, children || resolveChildren());

  function resolveChildren() {
    return (
      node.children &&
      node.children.map((child, idx) => {
        return astToVNode(
          createElement,
          child,
          options,
          {
            node,
            nodeData,
          },
          idx,
        );
      })
    );
  }
}

export function getDefinitions(
  node: Node,
  defs: Definitions = {},
): Definitions {
  const children: Node[] = node.children || [];

  return children.reduce((definitions, child) => {
    if (child.type === "definition" && child.identifier) {
      definitions[child.identifier] = {
        href: child.url as string,
        title: child.title as string,
      };
    }

    return getDefinitions(child, definitions);
  }, defs);
}

function getNodeData(
  createElement: CreateElement,
  node: Node,
  key: string,
  options: Options,
  renderer: Renderer,
  parent?: Parent,
  index = 0,
): NodeDataAndChildren {
  const definition = node.identifier
    ? options.definitions[node.identifier]
    : { title: "", href: "" };
  const nodeData: any = {
    key,
    props: {
      value: node.value,
    },
    attrs: {},
  };
  let children: VNode[] | undefined = undefined;

  switch (node.type) {
    case "root":
    case "text":
    case "inlineCode":
    case "thematicBreak":
    case "paragraph":
    case "strong":
    case "emphasis":
    case "delete":
    case "blockquote":
      break;
    case "html":
      nodeData.props.position = node.position;
      break;
    case "heading":
      nodeData.props.depth = node.depth;
      break;
    case "image":
      nodeData.attrs.title = node.title;
      nodeData.attrs.src = node.url;
      nodeData.attrs.alt = node.alt;
      break;
    case "imageReference":
      nodeData.attrs.title = definition.title;
      nodeData.attrs.src = definition.href;
      nodeData.attrs.alt = node.alt;
      break;
    case "link":
      nodeData.attrs.title = node.title;
      nodeData.attrs.href = node.url;
      break;
    case "list":
      nodeData.props.start = node.start;
      nodeData.props.ordered = node.ordered;
      nodeData.props.loose = node.loose;
      nodeData.props.depth = node.depth;
      break;
    case "listItem":
      nodeData.props.checked = node.checked;
      nodeData.props.loose = node.loose;

      children = getListItemChildren(node, parent).map((childNode, idx) => {
        return astToVNode(
          createElement,
          childNode,
          options,
          {
            node,
            nodeData,
          },
          idx,
        );
      });
      break;
    case "code":
      nodeData.props.lang = node.lang;
      break;
    case "definition":
      nodeData.props.identifier = node.identifier;
      nodeData.props.title = node.title;
      nodeData.props.url = node.url;
      break;
    case "linkReference":
      break;
    case "table":
    case "tableHead":
    case "tableBody":
      nodeData.props.columnAlignment = node.align;
      break;
    case "tableRow":
      nodeData.props.isHeader = get(parent, ["node", "type"]) === "tableHead";
      nodeData.props.columnAlignment = get(parent, [
        "nodeData",
        "props",
        "columnAlignment",
      ]);
      break;
    case "tableCell":
      nodeData.props.isHeader = get(parent, ["nodeData", "props", "isHeader"]);
      nodeData.attrs.align = get(parent, [
        "nodeData",
        "props",
        "columnAlignment",
        index,
      ]);
      break;
    default:
      nodeData.props.node = node;
      break;
  }

  return {
    nodeData,
    children,
  };
}

function getNodeKey(node: Node): string {
  if (node.position && node.position.start) {
    const { start } = node.position;

    return `${node.type}-${start.line}-${start.column}`;
  } else {
    return "";
  }
}

function getListItemChildren(node: Node, parent?: Parent) {
  if (node.loose) {
    return node.children;
  }

  const index = node.index ? node.index : 0;

  if (
    parent &&
    parent.node &&
    index > 0 &&
    parent.node.children[index - 1].loose
  ) {
    return node.children;
  }

  return flatMap(node.children, (child) => {
    if (child.type === "paragraph") {
      return child.children || [];
    } else {
      return [child];
    }
  });
}
