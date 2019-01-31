import VueRemarkCodeBlock from "@/renderers/code-block.vue";
import { mount } from "@vue/test-utils";

describe(VueRemarkCodeBlock.name, () => {
  test("snapshot", () => {
    const wrapper = mount(VueRemarkCodeBlock, {
      propsData: {
        lang: "js",
        value: "import foo from 'bar';"
      }
    });

    expect(wrapper).toMatchSnapshot();
  });
});
