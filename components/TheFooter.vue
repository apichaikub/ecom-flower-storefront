<template>
    <div class="container-footer">
        <div class="container">
            <div class="logo">
                <img src="~/assets/images/logo.png" />
            </div>
            <div class="info">
                <div class="links">
                    <ul class="section">
                        <li>
                            <BaseLink to="#" text="ร้านพวงหรีด" />
                        </li>
                        <li>
                            <BaseLink to="#" text="เลือกวัด" />
                        </li>
                        <li>
                            <BaseLink to="#" text="การสั่งซื้อ" />
                        </li>
                        <li>
                            <BaseLink to="#" text="ร้านดอกไม้" />
                        </li>
                    </ul>
                    <ul class="section">
                        <li>
                            <BaseLink to="#" text="ตัวอย่างพวกหรีด" />
                        </li>
                        <li>
                            <BaseLink to="#" text="บทความ" />
                        </li>
                        <li>
                            <BaseLink to="#" text="เกี่ยวกับเรา" />
                        </li>
                    </ul>
                </div>
                <div class="banners">
                    <Widget :items="banners"/>
                </div>
            </div>
        </div>
        <img src="~/assets/images/pattern/group-1180@2x.png" class="pattern-bg left"/>
        <img src="~/assets/images/pattern/group-1180@2x.png" class="pattern-bg right"/>
    </div>
</template>

<script>
import BaseLink from "@/components/Base/BaseLink.vue"
import Widget from "@/components/Combine/Widget.vue"

export default {
    components: {
        BaseLink,
        Widget,
    },

    data() {
        return {
            banners: [
                'images/banners/Kbank@2x.png',
                'images/banners/ktb@2x.png',
                'images/banners/bbl@2x.png',
                'images/banners/mastercard@2x.png',
                'images/banners/visa@2x.png',
                'images/banners/dbd1@2x.png',
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
.container-footer {
    position: relative;
    background-color: #010101;
    padding-bottom: 100px;
    
    .container {
        position: relative;
        display: flex;
        flex-direction: column;
        z-index: 1;

        .logo {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 8px 0;
            height: 30px;
            border-bottom: solid 1px rgba(255, 255, 255, .3);

            img {
                height: 100%;
            }
        }

        .info {
            display: flex;

            .links {
                flex: 1;
                display: flex;
                margin-top: 10px;
                font-size: 12px;

                .section {
                    margin-right: 100px;

                    li {
                        margin-bottom: 8px;

                        a {
                            color: #fff;
                        }
                    }
                }
            }

            .banners {
                flex: 1;
                display: flex;
            }
        }
    }
}

.pattern-bg {    
    &.left {
        position: absolute;
        top: -50px;
        left: -50px;
        height: 150px;
    }

    &.right {
        position: fixed;
        bottom: -50px;
        right: -50px;
        height: 150px;
    }
}
</style>