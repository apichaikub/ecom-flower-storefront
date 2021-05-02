<template>
    <div class="container-form">
        <h4 class="title mb-1">
            การจัดส่ง
        </h4>
        <div class="form mb-1">
            <BaseInput
                v-model="form.fullname"
                placeholder="ชื่อ - นามสกุล ผู้เสียชีวิต *"
            />
        </div>
        <div class="form mb-1">
            <BaseInput
                v-model="form.pavilion"
                placeholder="ชื่อศาลา"
            />
        </div>
        <div class="form">
            <BaseTextArea
                v-model="form.address"
                placeholder="รายละเอียดสถานที่จัดส่ง"
                rows="8"
            />
        </div>
    </div>
</template>

<script>
import BaseInput from "@/components/Base/BaseInput.vue";
import BaseTextArea from "@/components/Base/BaseTextArea.vue";

export default {
    components: {
        BaseInput,
        BaseTextArea,
    },

    data() {
        return {
            form: {
                fullname: null,
                pavilion: null,
                address: null,
            }
        }
    },

    watch: {
        form:  {
            handler: function() {
                this.$emit('update:form', this.form);
            },
            deep: true,
        }
    },
}
</script>

<style lang="scss" scoped>
.container-form {
    padding: 30px 15px 30px 15px;
    background-color: #f2ede9;
    border: 1px solid #f0ebe8;
    border-radius: 4px;

    .title {
        font-size: 16px;
        font-weight: 400;
    }
}
</style>