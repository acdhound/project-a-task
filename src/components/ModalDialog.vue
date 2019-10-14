<template>
    <div class="modal">
        <div class="content">
            <h2>{{title}}</h2>
            Maximum offer was: {{maxOffer}} <br>
            Minimum expected salary was: {{minSalary}} <br>
            <button v-on:click="pressOk">Ok</button><br>
            Current temperature in London: {{temperature}} &deg;C
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
    data() {
        return {
            temperature: ""
        };
    },
    mounted() {
        this.getTemperatureAsync();
    },
    methods: {
        pressOk() {
            this.$emit('press-ok', {});
        },
        getTemperatureAsync() {
            var xhttp = new XMLHttpRequest();
            xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather" +
                "?q=London,uk&APPID=5ad6d6af91ccc55b9e0cff95e436257a&units=metric", true);
            xhttp.send();
            xhttp.onreadystatechange = () => {
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                    const response = JSON.parse(xhttp.responseText);
                    this.temperature = response.main.temp;
                }
            };
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