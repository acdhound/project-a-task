<template>
  <div id="app">
    <h1>Salary negotiation tool</h1>
    <SalaryForm v-bind:employeeValue="employeeValue"
      v-bind:employerValue="employerValue"></SalaryForm>
  </div>
</template>

<script>
import SalaryForm from './components/SalaryForm.vue'

export default {
  name: 'app',
  components: {
    SalaryForm
  },
  data() {
    return {
      employeeValue: 0,
      employerValue: 0
    };
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
