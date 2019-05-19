import VueRemarkList from '@/renderers/list.vue';
import { mount } from '@vue/test-utils';

describe(VueRemarkList.name, () => {
  test('snapshot (unordered)', () => {
    const wrapper = mount(VueRemarkList, {
      propsData: {
        ordered: false
      },
      slots: {
        default: `<li>some list item</li>`
      }
    });

    expect(wrapper).toMatchSnapshot();
  });

  test('snapshot (ordered)', () => {
    const wrapper = mount(VueRemarkList, {
      propsData: {
        ordered: true
      },
      slots: {
        default: `<li>some list item</li>`
      }
    });

    expect(wrapper).toMatchSnapshot();
  });
});
