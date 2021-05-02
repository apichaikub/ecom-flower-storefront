import TheHeader from "@/components/TheHeader.vue"
import TheNavbar from "@/components/TheNavbar.vue"
import TheFooter from "@/components/TheFooter.vue"

export default {
  title: 'Layout'
}

export const header = () => ({
  components: {
    TheHeader,
  },
  template: `<TheHeader />`
})

export const navbar = () => ({
  components: {
    TheNavbar,
  },
  template: `<TheNavbar />`
})

export const footer = () => ({
  components: {
    TheFooter,
  },
  template: `<TheFooter />`
})