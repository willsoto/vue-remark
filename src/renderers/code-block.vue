<template>
  <pre>
    <code :class="language">{{ value }}</code>
  </pre>
</template>

<script lang="ts">
import Vue, { VueConstructor } from "vue";
import * as Unist from "unist";
import { VueRemark } from "../types";
import { Base } from "./base";

export default Base.extend({
  name: "vue-remark-code-block",
  computed: {
    language(): string {
      return `language-${this.node.lang}`;
    }
  }
});
</script>
