<template>
  <div id="app">
    <h1>Salary negotiation tool</h1>
    <NegotiationPanel></NegotiationPanel>
  </div>
</template>

<script>
import NegotiationPanel from './components/NegotiationPanel.vue'

export default {
  name: 'app',
  components: {
    NegotiationPanel
  }
}
</script>

<style>
body {
  width: 100%;
  height: 100%;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  margin: 0;
  position: relative;
}
</style>
