import markdown from "remark-parse";
import unified from "unified";
import Vue, { CreateElement, VNode } from "vue";
import Component from "vue-class-component";
import { astToVNode, getDefinitions } from "./ast-to-vnode";
import { defaultRenderers } from "./renderers";
import { Node, Renderers } from "./types";

@Component({
  name: "vue-remark",
  props: {
    source: {
      type: String,
      required: true
    },
    plugins: {
      type: Array,
      required: false,
      default() {
        return [];
      }
    },
    renderers: {
      type: Object,
      required: false
    }
  }
})
export default class VueRemark extends Vue {
  parser: unified.Processor = unified();

  // props
  source!: string;
  plugins!: unified.PluginTuple[];
  renderers!: Renderers;

  get ast(): Node {
    return (this.parser.parse(this.source) as unknown) as Node;
  }

  get mergedRenderers(): Renderers {
    return {
      ...defaultRenderers,
      ...this.renderers
    };
  }

  created() {
    this.initializePlugins();
  }

  private initializePlugins(): void {
    const plugins = [markdown].concat(this.plugins);

    plugins.forEach((plugin) => {
      if (Array.isArray(plugin)) {
        // Not sure why the tuple won't spread correctly...todo
        // https://github.com/Microsoft/TypeScript/pull/24897
        // @ts-ignore
        this.parser.use(...plugin);
      } else {
        this.parser.use(plugin);
      }
    });
  }

  render(createElement: CreateElement): VNode {
    const definitions = getDefinitions(this.ast);

    return astToVNode(createElement, this.ast, {
      definitions,
      renderers: this.mergedRenderers
    });
  }
}
