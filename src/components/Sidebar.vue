<script>
    export default {
        props: ['tasks-completed', 'tasks-total'],

        data(){
            return {
                hours: null,
                minutes: null,
                seconds: null
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
            }
        },
        

        computed: {
            styles() {
                return {
                    fontSize: this.tasksCompleted + 'px'
                    
                }
            },
        },

        created() {
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
    <h1 :style="styles">hi </h1>
</template>



<style lang="css" scoped>
    .container {
        height: 100%;
        background-color: pink;
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