<template>
    <div class="container-order-flower">
        <StepProgressbar :items="steps" />
        <Breadcrumb :items="breadcrumbs" />
        <FormOrder :form.sync="form" />
    </div>
</template>

<script>
import StepProgressbar from "@/components/Combine/StepProgressbar.vue"
import Breadcrumb from "@/components/Combine/Breadcrumb.vue"
import FormOrder from "@/components/Combine/FormOrder.vue"

export default {
    components: {
        StepProgressbar,
        Breadcrumb,
        FormOrder,
    },

    data() {
        return {
            form: null,
            steps: [
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
                    active: true,
                },
                {
                    icon: 'images/progressbar/paid.png',
                    label: 'ชำระเงิน',
                    active: false,
                },
            ],
            breadcrumbs: ['หน้าหลัก', 'เลือกพวกหรีด', 'ชื่อสินค้า', 'ข้อมูลการจัดสั่ง'],
        }
    },
}
</script>

<style lang="scss" scoped>
.container-order-flower {
    display: flex;
    flex-direction: column;
}
</style>