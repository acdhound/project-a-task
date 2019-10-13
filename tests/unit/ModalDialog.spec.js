import { mount } from '@vue/test-utils'
import ModalDialog from '@/components/ModalDialog.vue'

describe('ModalDialog.vue', () => {
    it('title is shown', () => {
        const title = "Title";
        const wrapper = mount(ModalDialog, { propsData: { title: title, maxOffer: 0, minSalary: 0 } });
        expect(wrapper.find('h2').text()).toBe(title);
    });
    it('event is eitted after clicking Ok button', () => {
        const wrapper = mount(ModalDialog, { propsData: { title: "", maxOffer: 0, minSalary: 0 } });
        wrapper.find('button').trigger('click');
        expect(wrapper.emitted()['press-ok']).toBeTruthy();
    });
});