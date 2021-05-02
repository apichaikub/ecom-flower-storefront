<template>
    <div class="container-adjust-flower">
        <div class="head">
            <p class="name">
                A298 - อินทรา
            </p>
            <p class="price">
                ฿1,999
            </p>
        </div>
        <div class="body">
            <div class="background-image">
                <img src="~/assets/images/flower.png" />
            </div>
            <div class="form-upload-image">
                <FormUploadImage
                    :form.sync="form"
                />
            </div>
        </div>
        <div class="footer">
            <div class="preview-btn">
                <span>
                    ตัวอย่างป้ายพวงหรีด
                </span>
                <BaseIcon name="search" height="16" />
            </div>
        </div>
    </div>
</template>

<script>
import FormUploadImage from "@/components/Combine/FormUploadImage.vue"
import BaseIcon from "@/components/Base/BaseIcon.vue"

export default {
    components: {
        FormUploadImage,
        BaseIcon,
    },

    data() {
        return {
            form: null,
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
.container-adjust-flower {
    display: flex;
    flex-direction: column;

    .head {
        .name {
            font-size: 24px;
            color: #57322b;
        }

        .price {
            font-size: 18px;
        }
    }

    .body {
        position: relative;
        margin-top: 10px;

        .background-image {
            width: 100%;

            img {
                width: 100%;
            }
        }

        .form-upload-image {
            position: absolute;
            top: calc(50% - 40px);
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

    .footer {
        margin-top: 10px;
        display: flex;
        justify-content: center;
        font-size: 12px;

        .preview-btn {
            display: flex;
            justify-content: center;
            cursor: pointer;

            span {
                margin-right: 15px;
            }
        }
    }
}
</style>