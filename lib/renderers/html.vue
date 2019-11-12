<template>
  <component :is="element" v-html="value"></component>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Unist from "unist";

@Component({
  name: "vue-remark-html",
  props: {
    position: {
      type: Object,
      required: false,
      default() {
        return {};
      },
    },
    value: {
      type: String,
      required: true,
    },
  },
})
export default class VueRemarkHtml extends Vue {
  position!: Unist.Position;
  value!: string;

  get isBlock(): boolean {
    if (Object.keys(this.position).length === 0) {
      return true;
    }

    return this.position.start.line === this.position.end.line;
  }

  get element(): string {
    return this.isBlock ? "div" : "span";
  }
}
</script>
