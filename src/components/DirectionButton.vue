<template>
    <button v-on:click="setPosition"
            v-on:touchstart.prevent="setDirection"
            v-on:touchend.prevent="stop">
        {{position}}
    </button>
</template>

<script>
    import {ACTIONS} from "../services/store";

    const CLICK_THRESHOLD = 200; // in ms

    export default {
        name: "DirectionButton",

        data() {
            return {
                actionStarted: false,
            };
        },

        props: {
            position: String
        },

        methods: {
            setPosition() {
                this.$store.dispatch(ACTIONS.CONTROL_POSITION, this.position)
            },

            setDirection() {
                this.actionStarted = Date.now();
                this.$store.dispatch(ACTIONS.CONTROL_DIRECTION, this.position);
            },

            stop() {
                if (Date.now() - this.actionStarted > CLICK_THRESHOLD) {
                    this.$store.dispatch(ACTIONS.STOP);
                } else {
                    this.setPosition();
                }
            },
        }
    }
</script>

<style scoped>
    button {
        width:40%;
        height: 60px;
    }
</style>
