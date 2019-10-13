import { shallowMount } from '@vue/test-utils'
import NegotiationPanel from '@/components/NegotiationPanel.vue'

describe('NegotiationPanel.vue', () => {
  it('success title if the offer is bigger', () => {
    const wrapper = shallowMount(NegotiationPanel, { propsData: { } });
    wrapper.vm.changeEmployeeValue(10.0);
    wrapper.vm.changeEmployerValue(12.0);
    wrapper.vm.validateAndShowModal();
    expect(wrapper.vm.modalTitle).toBe('Success!');
  });
  it('failure title if the offer is smaller', () => {
    const wrapper = shallowMount(NegotiationPanel, { propsData: { } });
    wrapper.vm.changeEmployeeValue(15.0);
    wrapper.vm.changeEmployerValue(12.0);
    wrapper.vm.validateAndShowModal();
    expect(wrapper.vm.modalTitle).toBe('Failure!');
  });
});
