<template>
    <div class="container-form-upload-image">
        <div class="upload">
            <BaseInputUpload
                v-model="form.base64Image"
            />
        </div>
        <div class="input">
            <BaseInputTransparent
                v-model="form.line1"
                placeholder="พิมพ์ข้อความบรรทัดที่ 1"
                class="mb-1"
            />
            <BaseInputTransparent
                v-model="form.line2"
                placeholder="พิมพ์ข้อความบรรทัดที่ 2"
            />
        </div>
    </div>
</template>

<script>
import BaseInputUpload from '@/components/Base/BaseInputUpload.vue';
import BaseInputTransparent from '@/components/Base/BaseInputTransparent.vue';

export default {
    components: {
        BaseInputUpload,
        BaseInputTransparent,
    },

    data() {
        return {
            form: {
                base64Image: null,
                line1: null,
                line2: null,
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
.container-form-upload-image {
    display: flex;
    width: 350px;
    height: 80px;
    padding: 10px;
    background-color: #f2ede9;
    border-radius: 4px;

    .upload {
        width: 80px;
        margin-right: 15px;
    }

    .input {
        width: 230px;
        padding: 0 10px;
        margin-top: 8px;

        &::v-deep input {
            font-size: 12px;
        }
    }
}

.mb-1 {
    margin-bottom: 5px;
}
</style>