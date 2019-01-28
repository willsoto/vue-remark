<script lang="ts">
import Vue, { CreateElement, VNode } from "vue";
import Component from "vue-class-component";

@Component({
  name: "vue-remark-text",
  props: {
    value: {
      type: String,
      required: true
    }
  }
})
export default class VueRemarkText extends Vue {
  value!: string;

  render(h: CreateElement): VNode {
    // private method yolo
    // TODO: find a better way to return text
    // @ts-ignore
    return this._v(this.value);
  }
}
</script>
