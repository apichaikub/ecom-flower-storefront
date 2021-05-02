import BaseButton from "@/components/Base/BaseButton.vue"
import BaseDatePicker from "@/components/Base/BaseDatePicker.vue"
import BaseTimePicker from "@/components/Base/BaseTimePicker.vue"
import BaseIcon from "@/components/Base/BaseIcon.vue"
import BaseInput from "@/components/Base/BaseInput.vue"
import BaseInputTransparent from "@/components/Base/BaseInputTransparent.vue"
import BaseInputUpload from "@/components/Base/BaseInputUpload.vue"
import BaseTextArea from "@/components/Base/BaseTextArea.vue"
import BaseLink from "@/components/Base/BaseLink.vue"

export default {
  title: 'Base'
}

export const Button = () => ({
  components: {
    BaseButton,
  },
  template: `
    <BaseButton text="Button"/>
  `
})

export const DatePicker = () => ({
  components: {
    BaseDatePicker,
  },
  data() {
    return {
      date: null,
    }
  },
  template: `
    <div>
      <BaseDatePicker v-model="date"/>
      <br/>
      date: {{ date }}
    </div>
  `
})

export const TimePicker = () => ({
  components: {
    BaseTimePicker,
  },
  data() {
    return {
      time: null,
    }
  },
  template: `
    <div>
      <BaseTimePicker v-model="time"/>
      <br/>
      time: {{ time }}
    </div>
  `
})

export const Icon = () => ({
  components: {
    BaseIcon,
  },
  template: `
    <div>
      <BaseIcon name="cart" width="30" height="30" />
      <BaseIcon name="chat" width="30" height="30" />
      <BaseIcon name="search" height="30" />
    </div>
  `
})

export const Input = () => ({
  components: {
    BaseInput,
  },
  data() {
    return {
      input: null,
    }
  },
  template: `
    <div>
      <BaseInput v-model="input" placeholder="ขื่อ" />
      input: {{ input }}
    </div>
  `
})

export const InputTransparent = () => ({
  components: {
    BaseInputTransparent,
  },
  data() {
    return {
      input: null,
    }
  },
  template: `
    <div>
      <BaseInputTransparent v-model="input" placeholder="พิมพ์ข้อความบรรทัดที่" />
      input: {{ input }}
    </div>
  `
})

export const InputUpload = () => ({
  components: {
    BaseInputUpload,
  },
  data() {
    return {
      base64Image: null,
    }
  },
  template: `
    <div>
      <BaseInputUpload v-model="base64Image" />
      base64Image: {{ base64Image }}
    </div>
  `
})

export const TextArea = () => ({
  components: {
    BaseTextArea,
  },
  template: `
    <BaseTextArea placeholder="รายละเอียดสถานที่จัดส่ง"/>
  `
})

export const Link = () => ({
  components: {
    BaseLink,
  },
  template: `
    <BaseLink
      to="https://www.loveyouflower.com/"
      text="Link"
    />
  `
})