<template>
    <div class="container-input">
        <textarea
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

    textarea {
        flex: 1;
        padding: 7px 15px;
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