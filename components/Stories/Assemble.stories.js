import OrderFlower from "@/components/Assemble/OrderFlower.vue"

export default {
  title: 'Assemble'
}

export const orderFlower = () => ({
  components: {
    OrderFlower,
  },
  data() {
    return {
      form: null,
    }
  },
  template: `
    <div>
      <OrderFlower :form.sync="form" />
      form: {{ form }}
    </div>
  `
})