import Unist from "unist";
import { VNode, VNodeData } from "vue";

export type Renderer =
  | string
  | Vue.Component<any, any, any, any>
  | Vue.AsyncComponent<any, any, any, any>
  | (() => Vue.Component);

export interface Renderers {
  [key: string]: string | Renderer;
}

export interface Definition {
  href: string;
  title: string;
}

export interface Definitions {
  [key: string]: Definition;
}

export interface Node extends Unist.Node {
  children: Node[];

  identifier?: string;
  index?: number;
}

export interface Options {
  renderers: Renderers;
  definitions: Definitions;
}

export interface Parent {
  node: Node;
  nodeData: VNodeData;
}

export type NodeDataAndChildren = {
  nodeData: VNodeData;
  children?: VNode[];
};
