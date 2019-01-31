<template>
  <component :is="listType" :start="start">
    <slot></slot>
  </component>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  name: "vue-remark-list",
  props: {
    ordered: {
      type: Boolean,
      required: true
    },
    start: {
      type: Number,
      required: false
    }
  }
})
export default class VueRemarkList extends Vue {
  ordered!: boolean;
  start!: number;

  get listType(): string {
    return this.ordered ? "ol" : "ul";
  }
}
</script>
