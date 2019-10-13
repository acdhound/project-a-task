import { shallowMount, mount } from '@vue/test-utils'
import NegotiationPanel from '@/components/NegotiationPanel.vue'
import SalaryForm from '@/components/SalaryForm.vue'
import ModalDialog from '@/components/ModalDialog.vue'

function mountPanel() {
  return mount(NegotiationPanel, { propsData: { } });
}

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
  it('modal window is shown after submitting the values', () => {
    const wrapper = mountPanel();
    const modalWrapper = wrapper.find(ModalDialog);
    expect(modalWrapper.isVisible()).toBe(false);
    wrapper.vm.changeEmployeeValue(1);
    wrapper.vm.changeEmployerValue(2);
    wrapper.vm.validateAndShowModal();
    expect(modalWrapper.isVisible()).toBe(true);
  });
  it('modal window disappears after pressing Ok button', () => {
    const wrapper = mountPanel();
    const modalWrapper = wrapper.find(ModalDialog);
    wrapper.vm.modalActive = true;
    expect(modalWrapper.isVisible()).toBe(true);
    modalWrapper.vm.$emit('press-ok', {});
    expect(modalWrapper.isVisible()).toBe(false);
  });
  it('only employee tab is visible when active', () => {
    const wrapper = mountPanel();
    wrapper.find('.tab-header.employee').trigger('click');
    const formWrappers = wrapper.findAll(SalaryForm);
    expect(formWrappers.filter(w => w.classes('employee'))
      .at(0).isVisible()).toBe(true);
    expect(formWrappers.filter(w => w.classes('employer'))
      .at(0).isVisible()).toBe(false);
  });
  it('only employer tab is visible when active', () => {
    const wrapper = mountPanel();
    wrapper.find('.tab-header.employer').trigger('click');
    const formWrappers = wrapper.findAll(SalaryForm);
    expect(formWrappers.filter(w => w.classes('employee'))
      .at(0).isVisible()).toBe(false);
    expect(formWrappers.filter(w => w.classes('employer'))
      .at(0).isVisible()).toBe(true);
  });
});
