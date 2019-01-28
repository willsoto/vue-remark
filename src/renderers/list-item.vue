<template>
  <li>
    <slot></slot>
  </li>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  name: "vue-remark-list-item"
})
export default class VueRemarkListItem extends Vue {}
</script>
