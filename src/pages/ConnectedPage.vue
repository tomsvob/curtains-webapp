<template>
    <div>
        <DirectionButton :position="OPEN"/>
        <DirectionButton :position="CLOSE"/>
    </div>
</template>

<script>
    import DirectionButton from "../components/DirectionButton";

    import {POSITION} from "../constants";

    export default {
        name: "ConnectedPage",

        components: {
            DirectionButton,
        },

        data() {
            return {
                OPEN: POSITION.OPEN,
                CLOSE: POSITION.CLOSE,
            };
        }
    }
</script>

<style scoped>

</style>
