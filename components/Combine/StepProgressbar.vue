<template>
    <div class="wrapper">
        <ul class="container container-step-progressbar">
            <li
                v-for="(item, index) in mapItems"
                :key="index"
                :class="['item', { active: item.active }]"
            >
                <div class="inner-item">
                    <div class="icon">
                        <img :src="item.src" />
                    </div>
                    <div class="title">
                        {{ item.no }} {{ item.label }}
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            default: () => ([]),
        }
    },

    computed: {
        mapItems() {
            return this.items.map((item, index) => {
                return {
                    src: require(`~/assets/${item.icon}`),
                    no: index + 1,
                    ...item,
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    padding: 30px 0;
    background-color: #faf9f7;

    .container-step-progressbar {
        display: flex;
        transform: translateX(18px);

        .item.active {
            .inner-item {
                background-color: #502725;

                .icon {
                    background-color: #fff;
                    border: solid 5px #502725;
                    border-radius: 50%;

                    img {
                        opacity: 1;
                    }
                }

                .title {
                    color: #fff;
                }
            }

            &::before {
                border: 25px solid #502725;
                border-left-color: transparent;
            }

            &::after {
                border-left: 25px solid #502725;
            }
        }

        .item {
            position: relative;
            display: flex;
            height: 50px;
            padding: 0 25px 0 50px;
            margin-left: -20px;

            .inner-item {
                display: flex;
                padding: 0 15px 0 10px;
                margin-left: -18px;
                background-color: #f2ede9;

                .icon {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 70px;
                    height: 70px;
                    top: 50%;
                    transform: translateY(-50%);
                    background-color: #fff;
                    border: solid 5px #f2ede9;
                    border-radius: 50%;

                    img {
                        width: 50px;
                        height: 50px;
                        opacity: 0.3;
                    }
                }

                .title {
                    display: flex;
                    flex: 1;
                    min-width: 80px;
                    align-items: center;
                    justify-content: center;
                    margin-left: 10px;
                    color: #bfb2af;
                    font-size: 12px;
                }
            }

            &::before {
                content: "";
                position: absolute;
                z-index: -1;
                display: block;
                bottom: 0;
                left: 0;
                border: 25px solid #f2ede9;
                border-left-color: transparent;
            }

            &::after {
                content: "";
                position: absolute;
                top: 0;
                right: 0;
                width: 0px;
                height: 0px;
                border-top: 25px solid transparent;
                border-bottom: 25px solid transparent;
                border-left: 25px solid #f2ede9;
            }
        }
    }
}
</style>