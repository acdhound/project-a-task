<template>
    <div class="modal">
        <div class="content">
            <h2>{{title}}</h2>
            Maximum offer was: {{maxOffer}} <br>
            Minimum expected salary was: {{minSalary}} <br>
            <button v-on:click="pressOk">Ok</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "ModalDialog",
    props: {
        title: String,
        maxOffer: Number,
        minSalary: Number
    },
    methods: {
        pressOk() {
            this.$emit('press-ok', {});
        }
    }
}
</script>

<style>
.modal{
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
}
.content {
    background-color: #ffffff;
    border: #2c3e50 1px solid;
    display: block;
    position: absolute;
    width: 200px;
    left: 50%;
    margin-left: -100px;
    margin-top: 50px;
    padding-bottom: 15px;
}
</style>