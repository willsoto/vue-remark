<template>
  <component :is="level">
    <slot></slot>
  </component>
</template>

<script lang="ts">
import Vue, { VueConstructor } from "vue";
import * as Unist from "unist";
import { VueRemark } from "../types";
import { Base } from "./base";

export default Base.extend({
  name: "vue-remark-heading",
  computed: {
    level(): string {
      const { depth } = this.options.node;

      return "h" + depth;
    }
  }
});
</script>
