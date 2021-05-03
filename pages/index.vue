<template>
  <OrderFlower
    :form.sync="form"
    @submit="handleSubmit"
  />
</template>

<script>
import OrderFlower from "@/components/Assemble/OrderFlower.vue"

export default {
  components: {
    OrderFlower,
  },

  data() {
    return {
      form: null,
    }
  },

  methods: {
    handleSubmit() {
      alert(JSON.stringify(this.form))
    },
  },
}
</script>