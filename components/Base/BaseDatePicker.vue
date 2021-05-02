<template>
    <div class="container-date">
        <input
            v-bind="$attrs"
            v-model="input"
            type="date"
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
.container-date {
    position: relative;
    display: flex;
    align-items: center;

    input {
        width: 100%;
        border: none;
        outline: none;
        padding: 3px 0 3px 30px;

        &::after {
            content: "";
            position: absolute;
            left: 30px;
            bottom: 0;
            width: calc(100% - 32px);
            border: solid 1px #dfd9d7;
        }
    }

    input::-webkit-calendar-picker-indicator {
        position: absolute;
        z-index: 1;
        top: 50%;
        left: 0px;
        transform: translate(-100%, -50%);
        background: url(~/assets/images/icons/calendar.png) no-repeat;
    }
}
</style>