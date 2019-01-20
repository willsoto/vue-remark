import Unist from "unist";

export function getChildren(node: Unist.Node | Unist.Parent): Unist.Node[] {
  if (node.children && Array.isArray(node.children)) {
    return node.children;
  }
  return [];
}
