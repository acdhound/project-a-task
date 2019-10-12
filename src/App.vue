<template>
  <div id="app">
    <SalaryForms></SalaryForms>
  </div>
</template>

<script>
import SalaryForms from './components/SalaryForms.vue'

export default {
  name: 'app',
  components: {
    SalaryForms
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
