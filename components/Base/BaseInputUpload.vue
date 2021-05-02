<template>
    <div class="container-upload-image">
        <template v-if="!isUploaded">
            <input
                type="file"
                @change="handleFileUpload"
            />
            <div class="icon-upload">
                <img src="~/assets/images/icons/upload-logo.png" />
                <span>
                    อัพโหลดโลโก้
                </span>
            </div>
        </template>
        <template v-else>
            <img ref="render-image" class="render-image"/>
            <span class="close-btn" @click="onClear">
                <img src="~/assets/images/icons/close.png" />
            </span>
        </template>
    </div>
</template>

<script>
export default {
    data() {
        return {
            base64Image: null,
        }
    },

    computed: {
        isUploaded() {
            return this.base64Image;
        },
    },

    watch: {
        base64Image() {
            this.$emit('input', this.base64Image)
        },
    },

    methods: {
        handleFileUpload(event) {
            const files = event.target.files
            if(files.length) {
                this.base64Image = null
                const reader = new FileReader()
                reader.onload = () => {
                    this.base64Image = reader.result
                    this.$nextTick(() => this.$refs['render-image'].src = this.base64Image)
                };
                reader.readAsDataURL(event.target.files[0])
            }
        },
        onClear() {
            this.base64Image = null;
        },
    },
}
</script>

<style lang="scss" scoped>
.container-upload-image {
    position: relative;
    width: 80px;
    height: 80px;

    input[type="file"] {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        opacity: 0;
        cursor: pointer;
    }

    .icon-upload {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color:#fff;

        img {
            width: 40px;
        }

        span {
            font-size: 11px;
            color: #624848;
        }
    }

    .icon-upload,
    .render-image {
        width: 80px;
        height: 80px;
    }

    .close-btn {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: -8px;
        right: -8px;
        width: 16px;
        height: 16px;
        cursor: pointer;

        img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>