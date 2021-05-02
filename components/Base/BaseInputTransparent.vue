<template>
    <BaseInput
        v-bind="$attrs"
        v-model="input"
        class="custom-input-transparent"
    />
</template>

<script>
import BaseInput from "@/components/Base/BaseInput.vue";

export default {
    components: {
        BaseInput,
    },

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
.custom-input-transparent {

    &::v-deep input {
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
}
</style>