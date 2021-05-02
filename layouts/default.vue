<template>
  <div>
    <TheHeader/>
    <TheNavbar/>
    <Nuxt />
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheNavbar,
    TheFooter,
  },
}
</script>
