import VueRemarkListItem from "@/renderers/list-item.vue";
import { mount } from "@vue/test-utils";

describe(VueRemarkListItem.name, () => {
  test.each([
    [
      "when checkboxes",
      {
        propsData: {
          checked: true
        }
      }
    ],
    [
      "when regular list items",
      {
        propsData: {
          checked: null
        }
      }
    ]
  ])("%s", (_, options) => {
    const wrapper = mount(VueRemarkListItem, options);

    expect(wrapper).toMatchSnapshot();
  });
});
