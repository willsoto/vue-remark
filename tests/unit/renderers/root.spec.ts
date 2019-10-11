import VueRemarkRoot from "@/renderers/root.vue";
import { mount } from "@vue/test-utils";

describe(VueRemarkRoot.name, () => {
  test("snapshot", () => {
    const wrapper = mount(VueRemarkRoot, {
      slots: {
        default: "something",
      },
    });

    expect(wrapper).toMatchSnapshot();
  });
});
