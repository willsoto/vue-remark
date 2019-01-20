<template>
  <component :is="element" v-html="value"></component>
</template>

<script lang="ts">
import Vue, { VueConstructor } from "vue";
import * as Unist from "unist";
import { VueRemark } from "../types";
import { Base } from "./base";

export default Base.extend({
  name: "vue-remark-html",
  computed: {
    isBlock(): boolean {
      const { position } = this.node;

      if (!position) {
        return true;
      }

      return position.start.line === position.end.line;
    },
    element(): string {
      return this.isBlock ? "div" : "span";
    }
  }
});
</script>
