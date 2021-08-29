<template>
  <label
    role="checkbox"
    :class="[
      'fox-checkbox',
      { 'is-checked': isGroup ? model.includes(label) : model }
    ]"
  >
    <input
      type="checkbox"
      class="fox-checkbox_input"
      v-model="model"
      :name="name"
      :value="label"
    />
    <span class="fox-checkbox_core" ref="core"></span>
    <span class="fox-checkbox_label">
      <slot />
      <template v-if="!$slots.default">
        {{ label }}
      </template>
    </span>
  </label>
</template>
<script>
export default {
  name: 'foxCheckbox',
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
    CheckboxGroup: {
      default: ''
    }
  },
  computed: {
    isGroup() {
      return !!this.CheckboxGroup
    },
    model: {
      get() {
        return this.isGroup ? this.CheckboxGroup.value : this.value
      },
      set(checked) {
        this.isGroup
          ? this.CheckboxGroup.$emit('input', checked)
          : this.$emit('input', checked)
      }
    }
  },
  methods: {
    setCoreColor() {
      if (this.activeColor || this.inActiveColor) {
        const color = this.model ? this.activeColor : this.inActiveColor
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
@import './scss/common.scss';
.fox-checkbox {
  display: inline-flex;
  align-items: center;
  position: relative;
  vertical-align: middle;
  font-size: 14px;
  height: 20px;
  margin: 2px 0;
  &_core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 20px;
    height: inherit;
    border: solid 1px $dark-white;
    outline: none;
    background-color: $white;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    &::before {
      content: '';
      position: absolute;
      top: 11px;
      left: 3px;
      // width: 6px;
      height: 2px;
      background-color: $white;
      transform: rotate(45deg);
    }
    &::after {
      content: '';
      position: absolute;
      top: 9px;
      left: 6px;
      // width: 12px;
      height: 2px;
      background-color: $white;
      transform: rotate(-45deg) scale(1.1);
    }
  }
  &.is-checked {
    & .fox-checkbox_core {
      border-color: $primary;
      background-color: $primary;
      &::after {
        animation: tickAfter 0.2s 0.2s linear;
        animation-fill-mode: forwards;
      }
      &::before {
        animation: tickBefore 0.2s linear;
        animation-fill-mode: forwards;
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
@keyframes tickBefore {
  from {
    width: 0px;
  }
  to {
    width: 6px;
  }
}
@keyframes tickAfter {
  from {
    width: 0px;
    top: 13px;
  }
  to {
    width: 12px;
    top: 9px;
  }
}
</style>
