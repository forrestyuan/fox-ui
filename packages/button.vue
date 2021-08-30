<template>
  <button
    @click="handleClick"
    :disabled="disabled"
    :type="nativeType"
    :class="['fox-button', type, { plain, round, circle }]"
  >
    <i v-if="icon" :class="[`fox-icon-${icon}`]"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: 'FoxButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    nativeType: {
      type: String,
      default: 'button'
    }
  },
  inject: {
    Form: { default: null }
  },
  data() {
    return {}
  },
  methods: {
    handleClick(e) {
      console.log(this.Form)
      if (!!this.Form && this.nativeType === 'submit') {
        this.Form.$emit('onSubmit', e)
      } else {
        this.$emit('click', e)
      }
    }
  },
  mounted() {},
  created() {}
}
</script>
<style lang="scss" scoped>
@import './scss/common.scss';
@mixin color-set($color: #ccc) {
  background-color: $color;
  border-color: $color;
  &:hover {
    background-color: rgba($color, 0.8);
  }
  &:disabled {
    background-color: $color;
  }
}
@mixin plain-set($color: #ccc) {
  background-color: rgba($color, 0.1);
  color: $color;
  &:hover {
    background-color: rgba($color, 1);
    color: $white;
  }
  &:disabled {
    background-color: rgba($color, 0.1);
    color: $color;
  }
}

.fox-button {
  color: $white;
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
  padding: 6px 10px;
  font-size: 14px;
  position: relative;
  display: inline-block;
  font-weight: 400;
  -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  word-spacing: 0;
  white-space: nowrap;
  line-height: 1em;
  overflow: hidden;
  cursor: pointer;
  &.round {
    border-radius: 10px;
  }
  &.circle {
    border-radius: 50%;
    padding: 8px;
  }
  &.default {
    @include color-set($default);
    &.plain {
      @include plain-set($default);
    }
  }
  &.primary {
    @include color-set($primary);
    &.plain {
      @include plain-set($primary);
    }
  }
  &.warning {
    @include color-set($warning);
    &.plain {
      @include plain-set($warning);
    }
  }
  &.danger {
    @include color-set($danger);
    &.plain {
      @include plain-set($danger);
    }
  }
  [class*='fox-icon-'] + span {
    margin-left: 5px;
  }

  &:disabled {
    @include disbale-set();
  }
}
</style>
