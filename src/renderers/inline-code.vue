<template>
  <code>{{ value }}</code>
</template>

<script lang="ts">
import Vue, { VueConstructor } from "vue";
import * as Unist from "unist";
import { VueRemark } from "../types";
import { Base } from "./base";

export default Base.extend({
  name: "vue-remark-inline-code"
});
</script>
