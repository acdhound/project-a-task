import { shallowMount } from '@vue/test-utils'
import NegotiationPanel from '@/components/NegotiationPanel.vue'

describe('NegotiationPanel.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(NegotiationPanel, {
      propsData: { }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
