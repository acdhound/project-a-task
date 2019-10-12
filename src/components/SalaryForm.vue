<template>
    <div>
        <form @submit="submitValue">
            <input type="number" v-model.number="value">
            <input type="submit" value="Submit">
        </form>
    </div>
</template>

<script>
export default {
    name: 'SalaryForm',
    data() {
        return {
            value: 0
        };
    },
    methods: {
        submitValue(e) {
            e.preventDefault();
            const newValue = this.value;
            this.$emit('change-value', newValue)
        }
    }
}
</script>