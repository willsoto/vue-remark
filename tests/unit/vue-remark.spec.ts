import { mount } from "@vue/test-utils";
import VueRemark from "../../src/vue-remark";

describe(VueRemark.name, () => {
  test("snapshot", () => {
    const wrapper = mount(VueRemark, {
      propsData: {
        source: "# Heading 1"
      }
    });

    expect(wrapper).toMatchSnapshot();
  });
});
