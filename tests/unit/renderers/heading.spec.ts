import VueRemarkHeading from "@/renderers/heading.vue";
import { mount } from "@vue/test-utils";

describe(VueRemarkHeading.name, () => {
  test("snapshot", () => {
    const wrapper = mount(VueRemarkHeading, {
      propsData: {
        depth: 2,
      },
      slots: {
        default: "Heading 2",
      },
    });

    expect(wrapper).toMatchSnapshot();
  });
});
