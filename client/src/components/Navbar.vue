<script>
export default {

}
</script>

<template>
    <header>
        <router-link to="/">Home </router-link>
        <router-link to="/about">About</router-link>
    </header>
</template>

<style lang="css" scoped>
    header {
        background-color: var(--light-blue);
        height: 2em;
    }
    
    a {
        color: white;
    }

    a:link {
        text-decoration: none;

    }

    a:visited {
        text-decoration: none;
    }

    header {
        text-align: right;
        padding: 4px;
    }

</style>
