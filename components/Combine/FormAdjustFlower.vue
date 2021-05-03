<template>
    <div :class="['container-adjust-flower', { 'edit-mode': !preview }, {'preview-mode': preview}]">
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
            <div class="canvas" @click="exportImage">
                <canvas ref="canvas"></canvas>
                <span>(คลิกที่รูปภาพเพื่อดาวน์โหลด)</span>
            </div>
        </div>
        <div class="footer">
            <div class="preview-btn" @click="togglePreview">
                <template v-if="!preview">
                    <span>
                        ตัวอย่างป้ายพวงหรีด
                    </span>
                    <BaseIcon name="search" height="16" />
                </template>
                <template v-else>
                    <span>
                        แก้ไขป้ายพวงหรีด
                    </span>
                </template>
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
            resources: {
                images: {
                    // wreath: 'https://i.imgur.com/hKJUGuW.jpg',
                    wreath: 'https://i.imgur.com/QxL3Vwz.png',
                    artboard: 'https://i.imgur.com/7OTXbhi.png',
                    upload: 'https://i.imgur.com/3rp5P8q.png',
                },
            },
            assets: {
                images: {},
            },
            preview: false,
        }
    },

    watch: {
        form:  {
            handler: function() {
                this.drawCanvas(this.assets, this.form);
                this.$emit('update:form', this.form);
            },
            deep: true,
        }
    },

    mounted() {
        this.loadAssets(this.resources, (results) => {
            this.assets.images = results.images
            this.drawCanvas(this.assets, this.form)
        })
    },

    methods: {
        togglePreview() {
            this.preview = !this.preview
        },
        async loadAssets(resources, callback) {
            callback(await (async () => {
                const data = {
                    images: {},
                }
                for(const key of Object.keys(resources.images)) {
                    const image = resources.images[key]
                    data.images[key] = await this.loadImage(image)
                }
                return data
            })())
        },
        loadImage(src) {
            return new Promise((resolve) => {
                const img = new Image()
                img.onload = () => {
                    resolve(img)
                }
                img.crossOrigin = 'anonymous'
                img.src = src
            })
        },
        async drawCanvas(assets, _form) {
            const canvas = this.$refs.canvas
            const ctx = canvas.getContext('2d')
            const form = {
                base64Image: _form && _form.base64Image
                    ? await this.loadImage(_form.base64Image)
                    : assets.images.upload,
                line1: _form && _form.line1
                    ? _form.line1
                    : 'ข้อความบรรทัดที่ 1',
                line2: _form && _form.line2
                    ? _form.line2
                    : 'ข้อความบรรทัดที่ 2',
            }
            const position = {
                artboard: {
                    x: 0,
                    y: 120,
                    w: 300,
                    h: 60,
                },
                logo: {
                    w: 40,
                    h: 40,
                },
            }

            canvas.width = 300
            canvas.height = 360

            ctx.drawImage(
                assets.images.wreath,
                0,
                0,
                300,
                360,
            )

            ctx.drawImage(
                assets.images.artboard,
                position.artboard.x,
                position.artboard.y,
                position.artboard.w,
                position.artboard.h,
            )

            ctx.drawImage(
                form.base64Image,
                position.artboard.x + 50,
                position.artboard.y + ((60 / 2) - (40 / 2)),
                position.logo.w,
                position.logo.h,
            )

            ctx.font = '14px Kanit'
            ctx.textBaseline = 'top'

            ctx.fillText(
                form.line1,
                position.artboard.x + 100,
                position.artboard.y + 15,
            )

            ctx.fillText(
                form.line2,
                position.artboard.x + 100,
                position.artboard.y + 35,
            )
        },
        exportImage() {
            const mimeType = 'image/png'
            const canvas = this.$refs.canvas
            const base64Image = canvas.toDataURL(mimeType)
            const imageUri = base64Image.replace(mimeType, "image/octet-stream")
            window.location = imageUri
        },
    },
}
</script>

<style lang="scss" scoped>
.container-adjust-flower {
    display: flex;
    flex-direction: column;

    &.edit-mode {
        .canvas {
            visibility: hidden;
            transform: scale(0);
            position: absolute;
            top: -1000px;
            left: -1000px;
        }
    }

    &.preview-mode {
        .background-image,
        .form-upload-image {
            display: none;
        }
    }

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

        .canvas {
            text-align: center;
            cursor: pointer;

            span {
                font-size: 11px;
            }
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