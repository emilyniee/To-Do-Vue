<script>
    import { GChart } from 'vue-google-charts'

    export default {
        props: {
            tasksCompleted: Number,
            tasksTotal: Number,
        },

        data(){
            return {
                hours: null,
                minutes: null,
                seconds: null,
            }
        },

        methods: {
            setTime() {
                const date = new Date();
                const hours = date.getHours();
                const minutes = date.getMinutes();
                const seconds = date.getSeconds();
                this.hours = 24- hours;
                this.minutes = 60 - minutes;
                this.seconds = 60 - seconds;
            },
        },

        components: {
            GChart
        },
        
        mounted:
            function() {
                this.setTime();
                setInterval(this.setTime, 1000);
            },
        
  }

</script>

<template>
    <div class="container">
        <div>
            {{ tasksCompleted }}/{{ tasksTotal }} tasks completed
        </div>
        <div>
            {{ hours }} h
            {{ minutes }} m 
            {{ seconds }} s
            left of the day
        </div>
    </div>
</template>



<style lang="css" scoped>
    .container {
        height: 100%;
        background-color: var(--red);
        font-size: 16px;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: white;
    }

    .pie {
        --background: 64%;
        width: 400px;
        height: 400px;
        background-image: conic-gradient(orange var(--background), blue 17%);
        border-radius: 50%
    }
</style>