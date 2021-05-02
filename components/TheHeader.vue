<template>
    <div class="container-header">
        <div class="container">
            <div class="logo">
                <img src="~/assets/images/logo.png" />
            </div>
            <div class="actions">
                <BaseLink to="#" class="custom-link">
                    <BaseIcon name="user" width="16" class="icon"/>
                    <span>เข้าสู่ระบบ</span>
                </BaseLink>
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
}
</script>

<style lang="scss" scoped>
.container-header {
    background-color: #010101;
    height: 40px;

    .container {
        position: relative;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        .logo {
            position: absolute;
            height: 30px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-bottom: solid 1px rgb(91, 189, 112);

            img {
                height: 100%;
            }
        }

        .actions {
            .custom-link {
                display: flex;
                align-items: center;
                color: #fff;
                font-size: 12px;

                .icon {
                    position: relative;
                    top: -1px;
                    margin-right: 10px;
                }
            }
        }
    }
}
</style>