<template>
    <div class="container-navbar">
        <div class="container">
            <nav>
                <ul>
                    <li
                        v-for="(item, index) in navs"
                        :key="index"
                    >
                        <BaseLink
                            :to="item.to"
                            :text="item.text"
                        />
                    </li>
                </ul>
            </nav>
            <div class="actions">
                <div class="item">
                    <BaseIcon name="cart" width="16"/>
                </div>
                <div class="item">
                    <BaseIcon name="chat" width="16"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BaseLink from "@/components/Base/BaseLink.vue"
import BaseIcon from "@/components/Base/BaseIcon.vue"

export default {
    components: {
        BaseLink,
        BaseIcon,
    },

    data() {
        return {
            navs: [
                {
                    text: 'ร้านพวงหรีด',
                    to: '#',
                },
                {
                    text: 'เลือกวัด',
                    to: '#',
                },
                {
                    text: 'การสั่งซื้อ',
                    to: '#',
                },
                {
                    text: 'ร้านดอกไม้',
                    to: '#',
                },
                {
                    text: 'ตัวอย่างพวกหรีด',
                    to: '#',
                },
                {
                    text: 'บทความ',
                    to: '#',
                },
                {
                    text: 'เกี่ยวกับเรา',
                    to: '#',
                },
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
.container-navbar {
    background-color: #c5aea8;
    height: 50px;

    .container {
        position: relative;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        nav {
            ul {
                display: flex;

                li {
                    margin-right: 20px;
                    font-size: 12px;
                }
            }
        }

        .actions {
            display: flex;

            .item {
                display: flex;
                align-items: center;
                padding: 0 15px;
                border-right: solid 1px rgba(0, 0, 0, .3);
            }

            .item:last-of-type {
                border-right: none;
            }
        }
    }
}
</style>