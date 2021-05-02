<template>
    <BaseInput
        v-bind="$attrs"
        v-model="input"
        transparent
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