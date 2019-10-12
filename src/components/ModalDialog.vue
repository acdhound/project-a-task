<template>
    <div v-if="active">
        <h2>{{title}}</h2>
        Maximum offer was: {{maxOffer}} <br>
        Minimum expected salary was: {{minSalary}} <br>
        <button v-on:click="pressOk">Ok</button>
    </div>
</template>

<script>
export default {
    name: "ModalDialog",
    props: {
        active: Boolean,
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