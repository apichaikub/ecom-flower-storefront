<template>
    <img :src="filePath" v-bind="$attrs"/>
</template>

<script>
export default {
    props: {
        name: String,
    },

    computed: {
        filePath() {
            return require(`~/assets/images/icons/${this.name}.png`);
        }
    }
}
</script>