
import CheckboxInput from '@/components/common/CheckboxInput.vue';

export default {
  component: CheckboxInput,
  title: 'Checkbox Input',
  tags: ['autodocs'],
};

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
