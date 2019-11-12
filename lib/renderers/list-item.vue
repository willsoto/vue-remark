<template>
  <li>
    <input v-if="isCheckbox" type="checkbox" readonly />
    <slot></slot>
  </li>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  name: "vue-remark-list-item",
  props: {
    checked: {
      type: Boolean,
      required: false,
    },
    loose: {
      type: Boolean,
      required: false,
    },
  },
})
export default class VueRemarkListItem extends Vue {
  checked!: boolean | null;
  loose!: boolean | null;

  get isCheckbox(): boolean {
    return this.checked !== null;
  }
}
</script>
