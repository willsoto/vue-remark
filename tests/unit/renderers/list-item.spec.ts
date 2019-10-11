import VueRemarkListItem from "@/renderers/list-item.vue";
import { mount } from "@vue/test-utils";

describe(VueRemarkListItem.name, () => {
  test.each([
    [
      "when checkboxes",
      {
        propsData: {
          checked: true,
        },
      },
    ],
    [
      "when regular list items",
      {
        propsData: {
          checked: null,
        },
      },
    ],
  ])("%s", (...args) => {
    const wrapper = mount(VueRemarkListItem, args[1]);

    expect(wrapper).toMatchSnapshot();
  });
});
