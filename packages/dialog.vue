<template>
  <transition name="fox-dialog">
    <div
      v-show="visible"
      class="fox-dialog_wrapper"
      @click.self="handelMaskClose"
    >
      <transition name="fox-dialog-inner">
        <div v-show="visible" class="fox-dialog" :style="styles">
          <div class="fox-dialog_header">
            <slot name="title">
              <span class="title">{{ title }}</span>
            </slot>
            <button @click="onCancel" class="closebtn">
              <i class="fox-icon-close"></i>
            </button>
          </div>
          <div class="fox-dialog_body">
            <slot></slot>
          </div>
          <div class="fox-dialog_footer" v-if="$slots.footer || showFooter">
            <slot name="footer"></slot>
            <div v-if="!$slots.footer && showFooter">
              <fox-button @click="onCancel">{{ cancelText }}</fox-button>
              <fox-button @click="onOk" type="primary">{{ okText }}</fox-button>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'FoxDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    styles: {
      type: String,
      default: ''
    },
    okText: {
      type: String,
      default: 'Ok'
    },
    cancelText: {
      type: String,
      default: 'Cancel'
    },
    showFooter: {
      type: Boolean,
      default: true
    },
    visible: {
      type: Boolean,
      default: false
    },
    maskClosable: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {}
  },
  methods: {
    onCancel() {
      this.$emit('onCancel')
    },
    onOk() {
      this.$emit('onOk')
    },
    handelMaskClose() {
      this.$props.maskClosable && this.onCancel()
    }
  }
}
</script>
<style lang="scss" scoped>
@import './scss/common.scss';
.fox-dialog_wrapper {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  left: 0;
  top: 0;
  background-color: rgba($default, 0.5);
  .fox-dialog {
    display: inline-block;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 60%;
    max-width: 300px;
    padding: 15px;
    border-radius: 4px;
    background-color: $white;
    transform: translate(-50%, -50%);
    transition: all 1s ease-in-out;
    z-index: 1001;
    &_header {
      display: flex;
      justify-content: space-between;
      flex-grow: 2;
      .title {
        font-size: 16px;
      }
      .closebtn {
        color: $default;
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 2px;
        border: 1px solid transparent;
        outline: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        padding: 0px;
        font-size: 16px;
        position: relative;
        display: inline-block;
        font-weight: 400;
        word-spacing: 0;
        white-space: nowrap;
        line-height: 1em;
        overflow: hidden;
        cursor: pointer;
        &:hover {
          transform: scale(1.02) translate(-2%, -2%);
        }
      }
    }
    &_body {
      padding: 2px 0;
    }
    &_footer {
      display: flex;
      justify-content: flex-end;
      ::v-deep .fox-button:first-child {
        margin-right: 5px;
      }
    }
  }
}

.fox-dialog-enter-active {
  animation: fade 0.5s;
}
.fox-dialog-leave-active {
  animation: fade 0.5s reverse;
}
.fox-dialog-inner-enter-active {
  animation: fade-inner 0.5s;
}
.fox-dialog-inner-leave-active {
  animation: fade-inner 0.5s reverse;
}

@keyframes fade {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fade-inner {
  from {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
</style>
