import VueRemarkHtml from "@/renderers/html.vue";
import { mount } from "@vue/test-utils";

describe(VueRemarkHtml.name, () => {
  test("snapshot", () => {
    const wrapper = mount(VueRemarkHtml, {
      propsData: {
        position: {
          start: {
            line: 1
          },
          end: {
            line: 1
          }
        },
        value: `<h1>html heading</h1>`
      }
    });

    expect(wrapper).toMatchSnapshot();
  });
});
