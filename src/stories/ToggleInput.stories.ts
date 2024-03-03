import ToggleInput from '@/components/common/ToggleInput.vue'

import { action } from '@storybook/addon-actions'

export default {
  component: ToggleInput,
  title: 'Toggle Input',
  tags: ['autodocs']
}


export const NotChecked = {
  args: {
    modelValue: false,
  },
};

export const Checked = {
  args: {
    modelValue: true,
  },
};