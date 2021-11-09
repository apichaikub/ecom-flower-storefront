<template>
    <button v-bind="$attrs" v-on="$listeners" class="btn">
        <slot>{{ text }}</slot>
        
    </button>
</template>

<script>
export default {
    props: {
        text: String,
        
        
    }
}
</script>

<style lang="scss" scoped>
.btn {
    padding: 8px 12px;
    background-color: #502725;
    border: none;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
}
</style>