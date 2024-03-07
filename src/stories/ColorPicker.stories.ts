import ColorPicker from '@/components/common/ColorPicker.vue'

export default {
  component: ColorPicker,
  title: 'Color Picker',
  tags: ['autodocs']
}

export const ColorPickerDefault = {
  args: {
    colorOptions: ['#2E3A8C', '#3B755F', '#F2EBDB', '#FFFFFF', '#212121'], 
    selected: '#3B755F',
  }
}
