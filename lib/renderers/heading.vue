<template>
  <component :is="level">
    <slot></slot>
  </component>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  name: "vue-remark-heading",
  props: {
    depth: {
      type: Number,
      required: true,
    },
  },
})
export default class VueRemarkHeading extends Vue {
  depth!: number;

  get level() {
    return "h" + this.depth;
  }
}
</script>
