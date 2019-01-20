import * as Unist from "unist";
import Vue, { PropType } from "vue";
import { VueRemark } from "../types";

export const Base = Vue.extend({
  props: {
    options: {
      type: Object as PropType<VueRemark.Options>,
      required: true
    }
  },
  computed: {
    node(): Unist.Node {
      return this.options.node;
    },
    value(): string | null {
      return this.node.value ? (this.node.value as string) : null;
    }
  }
});
