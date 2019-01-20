import * as markdown from "remark-parse";
import * as unified_ from "unified";
import Unist from "unist";
import Vue, { CreateElement, PropType, VNode, VNodeData } from "vue";
import { defaultRenderers, getChildren } from "./renderers";
import { VueRemark } from "./types";

// Hack for these issues:
// https://github.com/rollup/rollup-plugin-typescript/issues/76
// https://github.com/rollup/rollup-plugin-typescript/issues/68
let unified = unified_;

export default Vue.extend({
  name: "vue-remark",
  props: {
    parser: {
      // @ts-ignore
      type: Function as PropType<unified_.Processor>,
      required: false,
      default: unified()
    },
    source: {
      type: String as PropType<string>,
      required: true
    },
    skipHtml: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: false
    },
    plugins: {
      type: Array as PropType<unified_.PluginTuple[]>,
      required: false,
      default() {
        return [];
      }
    },
    renderers: {
      type: Object as PropType<VueRemark.Renderers>,
      required: false,
      default() {
        return {};
      }
    }
  },
  created() {
    const plugins = [markdown].concat(this.plugins);

    plugins.forEach((plugin) => this.applyParserPlugin(this.parser, plugin));
  },
  methods: {
    applyParserPlugin(parser: unified_.Processor, plugin: Plugin) {
      // Not sure why the tuple won't spread correctly...todo
      // https://github.com/Microsoft/TypeScript/pull/24897
      // @ts-ignore
      return Array.isArray(plugin) ? parser.use(...plugin) : parser.use(plugin);
    },
    astToDom(h: CreateElement, node: Unist.Node, parent?: Unist.Parent): VNode {
      const renderer = this.mergedRenderers[node.type];

      if (typeof renderer !== "string" && typeof renderer !== "function") {
        throw new Error(`Unknown renderer for ${node.type}`);
      }

      let key: string = "";
      if (node.position && node.position.start) {
        const { start } = node.position;

        key = `${node.type}-${start.line}-${start.column}`;
      }

      const data: VNodeData = {
        key,
        attrs: {
          ...this.$attrs
        },
        props: {
          options: {
            node,
            props: {
              skipHtml: this.skipHtml
            }
          }
        }
      };
      const children = getChildren(node).map((child) => {
        return this.astToDom(h, child, parent);
      });

      return h(renderer, data, children);
    }
  },
  computed: {
    ast(): Unist.Node {
      return this.parser.parse(this.source);
    },
    mergedRenderers(): VueRemark.Renderers {
      return Object.assign({}, defaultRenderers, this.renderers);
    }
  },
  render(h: CreateElement): VNode {
    return this.astToDom(h, this.ast);
  }
});
