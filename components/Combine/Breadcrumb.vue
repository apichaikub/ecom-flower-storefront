<template>
    <div class="wrapper">
        <ul class="container container-breadcrumb">
            <li
                v-for="(item, index) in items"
                :key="index"
                class="item"
            >
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        items: Array,
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    border-bottom: solid 1px #fafafa;

    .container-breadcrumb {
        display: flex;
        padding: 10px 0;

        .item {
            position: relative;
            padding-right: 20px;
            margin-right: 20px;
            color: #c9bebe;
            font-size: 14px;

            &::after {
                content: ">";
                position: absolute;
                top: calc(50% - 1px);
                right: 0;
                transform: translateY(-50%);
                font-size: 11px;
            }
        }

        .item:last-of-type {
            color: #5b5152;

            &::after {
                display: none;
            }
        }
    }
}
</style>