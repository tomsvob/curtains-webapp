<template>
    <button v-on:click="connectToDevice">Connect</button>
</template>

<script>
    import {ACTIONS} from "../services/store";

    export default {
        name: "ConnectPage",

        methods: {
            connectToDevice() {
                this.$store.dispatch(ACTIONS.CONNECT_TO_DEVICE)
            }
        }
    }
</script>

<style scoped>

</style>
