import StepProgressbar from "@/components/Combine/StepProgressbar.vue"
import Breadcrumb from "@/components/Combine/Breadcrumb.vue"
import FormUploadImage from "@/components/Combine/FormUploadImage.vue"
import FormShipTo from "@/components/Combine/FormShipTo.vue"
import FormAdjustFlower from "@/components/Combine/FormAdjustFlower.vue"
import FormOrder from "@/components/Combine/FormOrder.vue"
import Widget from "@/components/Combine/Widget.vue"

export default {
  title: 'Combine'
}

export const stepProgressbar = () => ({
  components: {
    StepProgressbar,
  },
  data() {
    return {
      items: [
        {
          icon: 'images/progressbar/pavilion.png',
          label: 'พิมพ์ชื่อวัด',
          active: true,
        },
        {
          icon: 'images/progressbar/rip.png',
          label: 'เลือกพวงหรีด',
          active: true,
        },
        {
          icon: 'images/progressbar/cart.png',
          label: 'สั่งซื้อ',
          active: false,
        },
        {
          icon: 'images/progressbar/paid.png',
          label: 'ชำระเงิน',
          active: false,
        },
      ],
    }
  },
  template: `
    <StepProgressbar :items="items" />
  `
})

export const breadcrumb = () => ({
  components: {
    Breadcrumb,
  },
  data() {
    return {
      items: ['หน้าหลัก', 'เลือกพวกหรีด', 'ชื่อสินค้า', 'ข้อมูลการจัดสั่ง'],
    }
  },
  template: `
    <Breadcrumb :items="items" />
  `
})

export const formUploadImage = () => ({
  components: {
    FormUploadImage,
  },
  data() {
    return {
      form: null,
    }
  },
  template: `
    <div>
      <FormUploadImage :form.sync="form" />
      form: {{ form }}
    </div>
  `
})

export const formAdjustFlower = () => ({
  components: {
    FormAdjustFlower,
  },
  template: `
    <div style="width: 300px; margin: auto;">
      <FormAdjustFlower />
    </div>
  `
})

export const formShipTo = () => ({
  components: {
    FormShipTo,
  },
  data() {
    return {
      form: null,
    }
  },
  template: `
    <div>
      <FormShipTo :form.sync="form"/>
      <br/>
      form: {{ form }}
    </div>
  `
})

export const formOrder = () => ({
  components: {
    FormOrder,
  },
  data() {
    return {
      form: null,
    }
  },
  template: `
    <div>
      <FormOrder :form.sync="form" />
      form: {{ form }}
    </div>
  `
})

export const widget = () => ({
  components: {
    Widget,
  },
  data() {
    return {
      items: [
        'images/banners/Kbank@2x.png',
        'images/banners/ktb@2x.png',
        'images/banners/bbl@2x.png',
        'images/banners/mastercard@2x.png',
        'images/banners/visa@2x.png',
        'images/banners/dbd1@2x.png',
      ],
    }
  },
  template: `
    <Widget :items="items"/>
  `
})
