<template>
  <div>
    <h2>Employee Tab</h2>
    <h3>{{employeeValue}}</h3>

    <h2>Employer Tab</h2>
    <h3>{{employerValue}}</h3>
  </div>
</template>

<script>
export default {
  name: 'SalaryForm',
  props: {
    employeeValue: Number,
    employerValue: Number
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
