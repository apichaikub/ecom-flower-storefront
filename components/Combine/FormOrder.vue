<template>
    <div class="container-form-order">
        <div class="head container">
            <div class="pavilion-info">
                <strong>
                    วัดเทพศิรินทราวาส
                </strong>
                <span>
                    เขตป้อมปราบศัตรูพ่าย
                </span>
            </div>
            <div class="date-time-picker">
                <BaseDatePicker
                    v-model="form.date"
                    class="date-picker"
                />
                <BaseTimePicker
                    v-model="form.time"
                    class="time-picker"
                />
            </div>
        </div>
        <div class="body">
            <div class="container">
                <div class="form-adjust-form">
                    <FormAdjustFlower
                        :form.sync="form.adjust"
                    />
                </div>
                <div class="form-ship-to">
                    <FormShipTo
                        :form.sync="form.shipTo"
                    />
                    <BaseButton text="ถัดไป" class="next-btn" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BaseDatePicker from "@/components/Base/BaseDatePicker.vue"
import BaseTimePicker from "@/components/Base/BaseTimePicker.vue"
import FormAdjustFlower from "@/components/Combine/FormAdjustFlower.vue"
import FormShipTo from "@/components/Combine/FormShipTo.vue"
import BaseButton from "@/components/Base/BaseButton.vue"

export default {
    components: {
        BaseDatePicker,
        BaseTimePicker,
        FormAdjustFlower,
        FormShipTo,
        BaseButton,
    },

    data() {
        return {
            form: {
                date: null,
                time: null,
                adjust: null,
                shipTo: null,
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
.container-form-order {
    display: flex;
    flex-direction: column;
    margin-top: 15px;

    .head {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .pavilion-info {
            display: flex;
            flex-direction: column;

            strong {
                font-size: 24px;
            }

            span {
                font-size: 14px;
                color: #624848;
            }
        }

        .date-time-picker {
            display: flex;

            .date-picker {
                margin-right: 40px;
            }

            .time-picker {
                width: 100px;
            }
        }
    }

    .body {
        margin-top: 15px;
        padding: 40px 0 80px 0;
        background-color: #faf9f7;

        .container {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .form-adjust-form {
                width: 300px;
            }

            .form-ship-to {
                flex: 1;
                display: flex;
                flex-direction: column;
                margin: 50px 0 0 80px;

                .next-btn {
                    width: 180px;
                    margin: 20px auto 0 auto;
                }
            }
        }
    }
}
</style>