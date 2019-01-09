<template>
    <div id="app">
        <div class="header">
            <h1>Smart curtains</h1>
        </div>
        <div class="content">
            <ConnectPage v-if="!isConnected"/>
            <ConnectedPage v-else/>
        </div>
        <div class="errors">
            <div class="error" v-for="error in errors">{{error}}</div>
        </div>
    </div>
</template>

<script>
    import ToggleButton from 'vue-js-toggle-button/src/Button.vue';
    import ConnectPage from "./pages/ConnectPage";
    import ConnectedPage from "./pages/ConnectedPage";

    const App = {
        components: {
            ConnectedPage,
            ConnectPage,
            ToggleButton,
        },

        computed: {
            isConnected() {
                return this.$store.state.isConnected
            },

            errors() {
                return this.$store.state.error;
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

    .errors {
        position: fixed;
        bottom: 50px;
        left: 15px;
        right: 15px;
        color: red;
        pointer-events: none;
    }
</style>
