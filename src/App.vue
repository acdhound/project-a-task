<template>
  <div id="app">
    <h1>Salary negotiation tool</h1>
    <NegotiationPanel v-on:submit-salary="showModal"></NegotiationPanel>
    <ModalDialog v-bind:active="modalActive" v-bind:title="modalTitle"
      v-bind:maxOffer="maxOffer" v-bind:minSalary="minSalary"
      v-on:press-ok="closeModal"></ModalDialog>
  </div>
</template>

<script>
import NegotiationPanel from './components/NegotiationPanel.vue'
import ModalDialog from './components/ModalDialog.vue'

export default {
  name: 'app',
  components: {
    NegotiationPanel, ModalDialog
  },
  data() {
    return {
      modalActive: false,
      modalTitle: "",
      maxOffer: 0,
      minSalary: 0
    };
  },
  methods: {
    showModal(e) {
      this.maxOffer = e.maxOffer;
      this.minSalary = e.minSalary;
      this.modalTitle = (this.maxOffer >= this.minSalary) ? "Success!" : "Failure!";
      this.modalActive = true;
    },
    closeModal() {
      this.modalActive = false;
    }
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
