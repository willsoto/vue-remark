<template>
  <pre>
    <code :class="language">{{ value }}</code>
  </pre>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  name: "vue-remark-code-block",
  props: {
    lang: {
      type: String,
      required: false
    },
    value: {
      type: String,
      required: true
    }
  }
})
export default class VueRemarkCodeBlock extends Vue {
  lang!: string;
  value!: string;

  get language(): string | undefined {
    return this.lang ? `language-${this.lang}` : undefined;
  }
}
</script>
