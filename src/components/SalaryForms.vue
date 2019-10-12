<template>
  <div>
    <h1>Salary negotiation tool</h1>

    <ul>
      <li v-bind:class="{ active: !activeTab }"
        v-on:click="activeTab = !activeTab">Employee Tab</li>
      <li v-bind:class="{ active: activeTab }"
        v-on:click="activeTab = !activeTab">Employer Tab</li>
    </ul>

    <SalaryForm v-bind:class="{ hidden: activeTab }"
      v-on:change-value="changeEmployeeValue" v-bind:initValue="employeeValue"></SalaryForm>

    <SalaryForm v-bind:class="{ hidden: !activeTab }"
      v-on:change-value="changeEmployerValue" v-bind:initValue="employerValue"></SalaryForm>
  </div>
</template>

<script>
import SalaryForm from './SalaryForm.vue'

export default {
  name: 'SalaryForms',
  components: { SalaryForm },
  data() {
    return {
      employeeValue: 0,
      employeeSubmitted: false,
      employerValue: 0,
      employerSubmitted: false,
      activeTab: false
    };
  },
  methods: {
    changeEmployeeValue(newValue) {
      this.employeeValue = newValue;
      this.employeeSubmitted = true;
      this.submitSalary();
    },
    changeEmployerValue(newValue) {
      this.employerValue = newValue;
      this.employerSubmitted = true;
      this.submitSalary();
    },
    submitSalary() {
      if ((!this.employeeSubmitted) || (!this.employerSubmitted)) {
        return;
      }
      this.$emit('submit-salary', {
        maxOffer: this.employerValue,
        minSalary: this.employeeValue
      })
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.hidden {
  display: none;
}
.active {
  color: #42b983;
}
</style>
