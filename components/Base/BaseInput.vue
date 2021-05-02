<template>
    <div :class="['container-input', { transparent }]">
        <input
            type="text"
            v-bind="$attrs"
            v-model="input"
        />
    </div>
</template>

<script>
export default {
    inheritAttrs: false,

    props: {
        value: [String],
        transparent: Boolean,
    },

    data() {
        return {
            input: null,
        }
    },

    watch: {
        input() {
            this.$emit('input', this.input)
        },
        value() {
            this.input = this.value;
        }
    },

    mounted() {
        this.input = this.value;
    },
}
</script>

<style lang="scss" scoped>
.container-input {
    display: flex;

    &.transparent input {
        background: transparent;
        padding: 4px 0;
        border: none;
        border-bottom: solid 1px #fff;
        border-radius: 0;
        color: #624848;

        &::placeholder {
            color: #624848;
            opacity: 0.5;
        }
    }

    input {
        flex: 1;
        padding: 12px 15px;
        border-radius: 4px;
        background-color: #fff;
        border: 1px solid #f0ebe8;
        outline: none;

        &::placeholder {
            color: #c3afac;
            opacity: 1;
        }
    }
}
</style>