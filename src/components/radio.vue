<template>
  <label role="radio" :class="['fox-radio', { 'is-checked': model === label }]">
    <input type="radio" class="fox-radio_input" v-model="model" :name="name" />
    <span class="fox-radio_core" ref="core"></span>
    <span class="fox-radio_label">
      <slot />
      <template v-if="!$slots.default">
        {{ label }}
      </template>
    </span>
  </label>
</template>
<script>
export default {
  name: 'foxRadio',
  props: {
    label: {
      type: [String, Boolean, Number],
      default: ''
    },
    value: [String, Boolean, Number],
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
  inject: {
    RadioGroup: {
      default: ''
    }
  },
  computed: {
    model: {
      get() {
        if (!!this.RadioGroup) {
          return this.RadioGroup.value
        } else {
          return this.value
        }
      },
      set() {
        if (!!this.RadioGroup) {
          this.RadioGroup.$emit('input', this.label)
        } else {
          this.$emit('input', this.label)
        }
      }
    }
  },
  methods: {
    setCoreColor() {
      if (this.activeColor || this.inActiveColor) {
        const color =
          this.model === this.label ? this.activeColor : this.inActiveColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    }
  },
  updated() {
    this.setCoreColor()
  },
  mounted() {
    this.setCoreColor()
  }
}
</script>
<style lang="scss" scoped>
@import '../scss/common.scss';
.fox-radio {
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
    width: 20px;
    height: inherit;
    border: solid 1px $dark-white;
    outline: none;
    border-radius: 100%;
    background-color: $dark-white;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    &::after {
      content: '';
      position: absolute;
      top: 3px;
      left: 3px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 14px;
      height: 14px;
      background-color: $white;
    }
  }
  &.is-checked {
    & .fox-radio_core {
      border-color: $primary;
      background-color: $primary;
      &::after {
        transform: scale(-50%, -50%);
      }
    }
  }
  &_input {
    visibility: hidden;
    width: 0;
    height: 0;
  }
  &_label {
    margin-left: 2px;
    font-size: 14px;
    vertical-align: middle;
  }
}
</style>
