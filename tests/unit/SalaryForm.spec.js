import { mount } from '@vue/test-utils'
import SalaryForm from '@/components/SalaryForm.vue'

function mountSalaryForm() {
    return mount(SalaryForm, { propsData: { caption: "", initValue: 0 } });
}

describe('SalaryForm.vue', () => {
    it('caption is shown', () => {
        const caption = "Enter value";
        const wrapper = mount(SalaryForm, { propsData: { caption: caption, initValue: 0 } });
        expect(wrapper.find('form').text()).toBe(caption);
    });
    it('correct event is emitted after submission', () => {
        const wrapper = mountSalaryForm();
        wrapper.find('input[type="number"]').setValue(10);
        wrapper.find("form").trigger("submit");
        expect(wrapper.emitted()['change-value']).toBeTruthy();
    });
    it('event with the correct value is emitted after submission', () => {
        const wrapper = mountSalaryForm();
        wrapper.find('input[type="number"]').setValue(10);
        wrapper.find("form").trigger("submit");
        expect(wrapper.emitted()['change-value'][0]).toEqual([10]);
    });
    it('input field disappears after submission', () => {
        const wrapper = mountSalaryForm();
        wrapper.find('input[type="number"]').setValue(10);
        wrapper.find("form").trigger("submit");
        expect(wrapper.find('input[type="number"]').isVisible()).toBe(false);
    });
});