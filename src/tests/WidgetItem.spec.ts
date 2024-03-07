import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import WidgetItem from '@/components/WidgetItem.vue'

describe('WidgetItem', () => {
  it('renders properly', () => {
    const wrapper = mount(WidgetItem, {
      props: {
        widget: {
          id: 1,
          type: 'plastic bottles',
          amount: 100,
          action: 'collects',
          active: true,
          linked: true,
          selectedColor: 'green'
        }
      }
    })
    expect(wrapper).toBeTruthy;
  })
})
