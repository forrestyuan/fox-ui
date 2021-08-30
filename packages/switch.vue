<template>
  <div
    role="switch"
    :class="['fox-switch', { 'is-checked': value }]"
    @click="handleClick"
  >
    <input type="checkbox" class="fox-switch_input" ref="input" :name="name" />
    <span class="fox-switch_core" ref="core"></span>
  </div>
</template>
<script>
export default {
  name: 'foxSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inActiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick() {
      this.$emit('input', !this.value)
      this.setCoreColor()
    },
    async setCoreColor() {
      if (this.activeColor || this.inActiveColor) {
        const color = this.value ? this.activeColor : this.inActiveColor
        // await this.$nextTick()
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    },
    setCheckInput() {
      this.$refs.input.checked = this.value
    }
  },
  updated() {
    this.setCoreColor()
    this.setCheckInput()
  },
  mounted() {
    this.setCoreColor()
    this.setCheckInput()
  }
}
</script>
<style lang="scss" scoped>
@import './scss/common.scss';
.fox-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  vertical-align: middle;
  font-size: 14px;
  height: 20px;
  &_core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: inherit;
    border: solid 1px $dark-white;
    outline: none;
    border-radius: 10px;
    background-color: $dark-white;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    &::after {
      content: '';
      position: absolute;
      top: 2px;
      left: 2px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: $white;
    }
  }
  &.is-checked {
    & .fox-switch_core {
      border-color: $primary;
      background-color: $primary;
      &::after {
        transform: translateX(20px);
      }
    }
  }
  &_input {
    visibility: hidden;
    width: 0;
    height: 0;
  }
}
</style>
