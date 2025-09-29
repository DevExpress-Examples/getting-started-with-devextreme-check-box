import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import CheckBoxContent from '../CheckBoxContent.vue';

describe('CheckBoxContent', () => {
  it('renders properly', () => {
    const wrapper = mount(CheckBoxContent);
    expect(wrapper.find('.dx-checkbox').exists()).toBe(true);
  });
});
