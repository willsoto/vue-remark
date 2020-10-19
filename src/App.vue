<template>
  <div>
    <vue-remark
      class="testing"
      :source="source"
      :renderers="renderers"
    ></vue-remark>
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from "vue";

import example from "./example.md";
import VueRemark from "../lib/vue-remark";
// import Shortcode from "./shortcode.vue";

export default Vue.extend({
  name: "app",
  components: {
    VueRemark,
  },
  data() {
    return {
      source: example,
      // plugins: [
      //   [
      //     // require("remark-shortcodes"),
      //     // {
      //     //   startBlock: "{{>",
      //     //   endBlock: "<}}",
      //     // },
      //   ],
      // ],
      // not working right now
      // https://github.com/djm/remark-shortcodes/issues/19
      // renderers: {
      //   shortcode: Shortcode,
      // },
    };
  },
});
</script>
