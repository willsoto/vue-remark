<template>
  <component :is="listType">
    <slot></slot>
  </component>
</template>

<script lang="ts">
import Vue, { VueConstructor } from "vue";
import * as Unist from "unist";
import { VueRemark } from "../types";
import { Base } from "./base";

export default Base.extend({
  name: "vue-remark-list",
  computed: {
    listType(): string {
      return this.node.ordered ? "ol" : "ul";
    }
  }
});
</script>
