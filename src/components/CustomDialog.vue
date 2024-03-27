<template>
    <div v-if="showDialog">
        <transition name="fade" appear>
            <div class="modal-overlay"></div>
        </transition>
        <transition name="pop" appear>
            <div class="modal" role="dialog" :style="{ width: `${width}px` }">
                <div class="model-title">
                    <div class="title-text">
                        <span>{{ title }}</span>
                        <div class="icon-close" v-if="showClose">
                            <i class="el-icon-close" v-on:click="close">
                                <img src="../assets/close.svg" class="closeIcon" alt="">
                            </i>
                        </div>
                    </div>
                    <div class="semiel-lipse"></div>
                </div>
                <div class="model-body">
                    <slot></slot>
                </div>
                <div class="footer_btn">
                    <div class="dis_in_center" v-if="showConfirmButton">
                        <button :disabled="disabled" :type="confirmBtnType" :loading="confirmBtnLoading" :size="size"
                            v-on:click="confirm">
                            {{ confirmText }}
                        </button>
                    </div>
                    <div class="dis_in_center right-btn" :class="{ margin_left_20: showCancelButton }"
                        v-if="showCancelButton">
                        <button plain :type="cancelType" :size="size" v-on:click="close">{{ cancelText }}</button>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    name: 'CustomDialog',
    components: {},
    model: {
        prop: 'showDialog',
        event: 'close'
    },
    props: {
        // 弹框的显示隐藏
        showDialog: {
            type: Boolean,
            default: false
        },
        // 底部按钮大小
        size: {
            type: String,
            default: 'medium'
        },
        // 宽度设置
        width: {
            type: [String, Number],
            default: '600'
        },
        // 是否显示右上角的关闭按钮
        showClose: {
            type: Boolean,
            default: true
        },
        // 弹框标题
        title: {
            type: String,
            default: '标题'
        },
        // 确认按钮
        confirmText: {
            type: String,
            default: '保存'
        },
        // 确认按钮loading
        confirmBtnLoading: {
            type: Boolean,
            default: false
        },
        // 是否显示确认按钮
        showConfirmButton: {
            type: Boolean,
            default: true
        },
        // 是否显示取消按钮
        showCancelButton: {
            type: Boolean,
            default: true
        },
        // 是否禁用确认按钮
        disabled: {
            type: Boolean,
            default: false
        },
        // 确认按钮类型
        confirmBtnType: {
            type: String,
            default: 'primary'
        },
        // 取消按钮类型
        cancelType: {
            type: String,
            default: 'info'
        },
        // 取消按钮文本
        cancelText: {
            type: String,
            default: '取消'
        },
        // 关闭按钮前的事件处理
        beforeClose: {
            type: Function,
            default: () => {
                return true;
            }
        }
    },
    methods: {
        close() {
            const data = this.beforeClose();
            if (!data) return;
            this.$emit('close', false);
        },
        confirm() {
            this.$emit('confirm', false);
        }
    }
};
</script>
<style scoped>
.modal-overlay {
    content: '';
    position: absolute;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 998;
    background: rgba(0, 0, 0, 0.4);
}

.modal {
    position: absolute;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    height: fit-content;
    box-shadow: 0px 5px 15px 0px rgba(255, 102, 0, 0.3);
    min-width: 400px;
    border-radius: 1rem;
    overflow: hidden;
    background: #fff;
    z-index: 999;
    border-radius: 4px;
    transform: none;
}

.model-body {
    padding: 2rem;
    min-height: 2rem;
    max-height: 50vh;
    overflow-y: auto;
}

.model-title {
    position: relative;
    height: 64px;
    text-align: center;
    overflow: hidden;
    line-height: 64px;
    width: 100%;
    color: #fff;
    font-size: 18px;
}

.semiel-lipse {
    position: absolute;
    width: 110%;
    left: -5%;
    height: 150%;
    top: -50%;
    background: rgba(255, 102, 0, 0.8);
    border-radius: 0% 0% 50% 50%;
}

.title-text {
    position: relative;
    z-index: 1000;
}

.icon-close {
    position: absolute;
    right: 10px;
    top: 0;
    line-height: 44px;
}

.icon-close i {
    cursor: pointer;
}

.closeIcon {
    width: 20px;
    height: 20px;
}


.footer_btn {
    text-align: center;
    padding-bottom: 20px;
    padding-top: 20px;
    border-top: 1px solid #f5f5f5;
}

.dis_in_center {
    display: inline-block;
    vertical-align: middle;
}

.right-btn {
    margin-left: 20px;
}

/* -----------------动画处理----------------- */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.4s linear;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.pop-enter-active,
.pop-leave-active {
    transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.pop-enter,
.pop-leave-to {
    opacity: 0;
    transform: scale(0.3) translateY(-50%);
}
</style>