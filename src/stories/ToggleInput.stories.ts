import ToggleInput from '@/components/common/ToggleInput.vue'

export default {
  component: ToggleInput,
  title: 'Toggle Input',
  tags: ['autodocs']
}

export const NotChecked = {
  args: {
    value: false,
  },
};

export const Checked = {
  args: {
    value: true,
  },
};