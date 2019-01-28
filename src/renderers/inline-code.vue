<template>
  <code>{{ value }}<slot></slot></code>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  name: "vue-remark-inline-code",
  props: {
    value: {
      type: String,
      required: true
    }
  }
})
export default class VueRemarkInlineCode extends Vue {}
</script>
