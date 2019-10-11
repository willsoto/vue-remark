<template>
  <div :id="node.attributes.id">{{ node.identifier }}</div>
</template>

<script lang="ts">
import Vue, { CreateElement, VNode } from "vue";
import Component from "vue-class-component";

@Component({
  name: "custom-shortcode",
  props: {
    node: {
      type: Object,
      required: true,
    },
  },
})
export default class Shortcode extends Vue {}
</script>
