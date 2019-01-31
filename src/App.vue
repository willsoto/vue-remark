<template>
  <div><vue-remark class="testing" :source="source"></vue-remark></div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from "vue";

import example from "./example.md";
import VueRemark from "../dist/VueRemark.umd.js";

export default Vue.extend({
  name: "app",
  components: {
    VueRemark
  },
  data() {
    return {
      source: example
    };
  }
});
</script>
