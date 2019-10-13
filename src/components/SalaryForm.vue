<template>
    <div>
        <form @submit="submitValue">
            {{caption}}<br>
            <div v-show="!submitted">
                <input type="number" v-model.number="value" min="0" step="0.1"><br>
                <input type="submit" value="Submit">
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'SalaryForm',
    props: {
        initValue: Number,
        caption: String
    },
    data() {
        return {
            value: this.initValue,
            submitted: false
        };
    },
    methods: {
        submitValue(e) {
            e.preventDefault();
            const newValue = this.value;
            this.$emit('change-value', newValue);
            this.submitted = true;
        }
    }
}
</script>