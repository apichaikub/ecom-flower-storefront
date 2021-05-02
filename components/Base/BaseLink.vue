<template>
  <NuxtLink :to="to" class="link">
    <slot>{{ text }}</slot>
  </NuxtLink>
</template>

<script>
export default {
    props: {
        to: {
            type: [String, Object],
            default: null,
        },
        text: {
            type: String,
            default: null,
        }
    }
}
</script>

<style lang="scss" scoped>
.link {
  text-decoration: none;
  color: #1d1817;
}
</style>