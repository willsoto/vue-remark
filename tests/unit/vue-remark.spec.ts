import VueRemark from "@/vue-remark";
import { mount } from "@vue/test-utils";
import fs from "fs";
import path from "path";
import Shortcode from "../../src/shortcode.vue";

const pathToExample = path.join(__dirname, "..", "..", "src", "example.md");
const exampleMarkdown = fs.readFileSync(pathToExample, {
  encoding: "utf8",
});

describe(VueRemark.name, () => {
  test("snapshot", () => {
    const wrapper = mount(VueRemark, {
      propsData: {
        source: exampleMarkdown,
      },
    });

    expect(wrapper).toMatchSnapshot();
  });

  describe("when providing plugins and renderers", () => {
    // Disabled due to https://github.com/djm/remark-shortcodes/issues/19
    test.skip("correctly applies them", () => {
      const wrapper = mount(VueRemark, {
        propsData: {
          source: [
            "### Using Shortcodes",
            `{{> MailchimpForm id="chfk2" <}}`,
          ].join("\n"),
          plugins: [
            [
              require("remark-shortcodes"),
              {
                startBlock: "{{>",
                endBlock: "<}}",
              },
            ],
          ],
          renderers: {
            shortcode: Shortcode,
          },
        },
      });

      expect(wrapper).toMatchSnapshot();
    });
  });
});
