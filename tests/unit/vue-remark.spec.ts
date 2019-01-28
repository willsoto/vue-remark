import { mount } from "@vue/test-utils";
import fs from "fs";
import path from "path";
import VueRemark from "../../src/vue-remark";

const pathToExample = path.join(__dirname, "..", "..", "src", "example.md");
const exampleMarkdown = fs.readFileSync(pathToExample, {
  encoding: "utf8"
});

describe(VueRemark.name, () => {
  test("snapshot", () => {
    const wrapper = mount(VueRemark, {
      propsData: {
        source: exampleMarkdown
      }
    });

    expect(wrapper).toMatchSnapshot();
  });
});
