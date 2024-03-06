import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import WidgetItem from '@/components/WidgetItem.vue'

describe('WidgetItem', () => {
  it('renders properly', () => {
    const wrapper = mount(WidgetItem, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
