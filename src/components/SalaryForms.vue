<template>
  <div>
    <h1>Salary negotiation tool</h1>

    <h2>Employee Tab</h2>
    <SalaryForm v-on:change-value="changeEmployeeValue"></SalaryForm>

    <h2>Employer Tab</h2>
    <SalaryForm v-on:change-value="changeEmployerValue"></SalaryForm>
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
      employerValue: 0
    };
  },
  methods: {
    changeEmployeeValue(newValue) {
      this.employeeValue = newValue;
      this.validateValues();
    },
    changeEmployerValue(newValue) {
      this.employerValue = newValue;
      this.validateValues();
    },
    validateValues() {
      if (this.employeeValue > this.employerValue) {
        alert('Failure!');
        return;
      }
      alert('Success!');
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
