<template>
  <div>
    <div class="tab-header" v-bind:class="{ active: !activeTab }"
      v-on:click="activeTab = !activeTab">Employee Tab</div>
    <div class="tab-header" v-bind:class="{ active: activeTab }"
      v-on:click="activeTab = !activeTab">Employer Tab</div>

    <div class="tab-content">
      <SalaryForm v-bind:class="{ hidden: activeTab }"
        v-on:change-value="changeEmployeeValue" v-bind:initValue="employeeValue"
        caption="Enter minimum salary"></SalaryForm>

      <SalaryForm v-bind:class="{ hidden: !activeTab }"
        v-on:change-value="changeEmployerValue" v-bind:initValue="employerValue"
        caption="Enter maximum offer"></SalaryForm>
    </div>
    <ModalDialog v-bind:active="modalActive" v-bind:title="modalTitle"
      v-bind:maxOffer="employerValue" v-bind:minSalary="employeeValue"
      v-on:press-ok="closeModal"></ModalDialog>
  </div>
</template>

<script>
import SalaryForm from './SalaryForm.vue'
import ModalDialog from './ModalDialog.vue'

export default {
  name: 'NegotiationPanel',
  components: { SalaryForm, ModalDialog },
  data() {
    return {
      employeeValue: 0,
      employeeSubmitted: false,
      employerValue: 0,
      employerSubmitted: false,
      activeTab: false,
      modalActive: false,
      modalTitle: ""
    };
  },
  methods: {
    changeEmployeeValue(newValue) {
      this.employeeValue = newValue;
      this.employeeSubmitted = true;
      this.validateAndShowModal();
    },
    changeEmployerValue(newValue) {
      this.employerValue = newValue;
      this.employerSubmitted = true;
      this.validateAndShowModal();
    },
    validateAndShowModal() {
      if ((!this.employeeSubmitted) || (!this.employerSubmitted)) {
        return;
      }
      this.modalTitle = (this.employerValue >= this.employeeValue) ? "Success!" : "Failure!";
      this.modalActive = true;
      this.employeeSubmitted = false;
      this.employerSubmitted = false;
    },
    closeModal() {
      this.modalActive = false;
    }
  }
}
</script>

<style scoped>
.tab-header {
  display: inline-block;
  user-select: none;
  cursor: pointer;
  border: #2c3e50 1px solid;
  padding: 10px;
}
.hidden {
  display: none;
}
.active {
  color: #ffffff;
  background-color: #2c3e50;
}
.tab-content {
  border: #2c3e50 1px solid;
  position: relative;
  width: 400px;
  left: 50%;
  margin-left: -200px;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
