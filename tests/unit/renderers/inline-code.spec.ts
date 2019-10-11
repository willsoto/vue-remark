import VueRemarkInlineCode from "@/renderers/inline-code.vue";
import { mount } from "@vue/test-utils";

describe(VueRemarkInlineCode.name, () => {
  test("snapshot", () => {
    const wrapper = mount(VueRemarkInlineCode, {
      propsData: {
        value: "import foo from 'bar';",
      },
    });

    expect(wrapper).toMatchSnapshot();
  });
});
