<template>
    <ul class="container-widget">
        <li
            v-for="(src, index) in mapItems"
            :key="index"
            class="item"
        >
            <img :src="src" />
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            default: () => ([]),
        },
    },

    computed: {
        mapItems() {
            return this.items.map((path) => {
                return require(`~/assets/${path}`);
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.container-widget {
    display: flex;

    .item {
        padding: 0 15px;
        border-right: 1px solid rgba(255, 255, 255, .3);
        height: 30px;

        img {
            height: 100%;
        }
    }

    .item:last-of-type {
        padding-right: 0;
        border-right: none;
    }
}
</style>