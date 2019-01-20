<template>
  <li>
    {{ text }}
  </li>
</template>

<script lang="ts">
import Vue, { VueConstructor } from "vue";
import * as Unist from "unist";
import { VueRemark } from "../types";
import { Base } from "./base";
import { getChildren } from "./helpers";

export default Base.extend({
  name: "vue-remark-list-item",
  computed: {
    children(): string[] {
      return this.getListItemChildren().map((child) => child.value as string);
    },
    text(): string {
      return this.children[0];
    },
    isCheckbox(): boolean {
      return this.node.checked !== null;
    }
  },
  methods: {
    getListItemChildren(): Unist.Node[] {
      const { node } = this.options;
      const children = getChildren(node);

      if (node.loose) {
        return children;
      }

      return children.flatMap((child) => {
        const isParagraph = child.type === "paragraph";

        if (isParagraph) {
          return getChildren(child);
        } else {
          return [child];
        }
      });
    }
  }
});
</script>
