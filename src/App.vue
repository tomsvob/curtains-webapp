<template>
    <div id="app">
        <div class="header">
            <h1>Smart curtains</h1>
        </div>
        <div class="content">
            <ConnectPage v-if="!isConnected"/>
            <div v-else>device connected</div>
        </div>
    </div>
</template>

<script>
    import ToggleButton from 'vue-js-toggle-button/src/Button.vue';
    import ConnectPage from "./pages/ConnectPage";

    const App = {
        components: {
            ConnectPage,
            ToggleButton,
        },

        computed: {
            isConnected() {
                return this.$store.state.isConnected
            }
        }
    };

    export default App;
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
