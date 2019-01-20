import * as Unist from "unist";

export namespace VueRemark {
  export type Component =
    | string
    | Vue.Component<any, any, any, any>
    | Vue.AsyncComponent<any, any, any, any>
    | (() => Vue.Component);

  export interface Renderers {
    [key: string]: string | Component;
  }

  export interface Options {
    node: Unist.Node;
    parent?: Unist.Parent;
    props: {
      skipHtml: boolean;
    };
  }
}
