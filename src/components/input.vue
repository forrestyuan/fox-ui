<template>
  <div class="fox-input">
    <input
      ref="input"
      class="fox-input_inner"
      :type="showPassword ? (isShowPassword ? 'text' : 'password') : type"
      :placeholder="placeholder"
      :name="name"
      :disabled="disabled"
      @input="handleInput"
    />
    <span class="fox-input_suffix" v-if="showSuffix">
      <i
        class="fox-input_icon fox-icon-circle-close"
        @click="handleClear"
        v-show="clearable && !!value"
      ></i>
      <i
        class="fox-input_icon fox-icon-view"
        @click="handleShowPassword"
        v-if="showPassword && type === 'password'"
      ></i>
    </span>
  </div>
</template>
<script>
export default {
  name: 'foxInput',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isShowPassword: false
    }
  },
  computed: {
    showSuffix() {
      return (this.showPassword && this.type === 'password') || this.clearable
    },
    nativeInputValue() {
      return this.value === null || this.value === undefined
        ? ''
        : String(this.value)
    }
  },

  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value)
    },
    handleClear() {
      this.$emit('input', '')
    },
    handleShowPassword() {
      this.isShowPassword = !this.isShowPassword
    },
    setNativeInputValue() {
      const input = this.getInput()
      if (!input) return
      if (input.value === this.nativeInputValue) return
      input.value = this.nativeInputValue
    },
    getInput() {
      return this.$refs.input
    }
  },
  watch: {
    nativeInputValue() {
      this.setNativeInputValue()
    },
    type() {
      this.setNativeInputValue()
    }
  },
  mounted() {
    this.setNativeInputValue()
  }
}
</script>
<style lang="scss" scoped>
@import '../scss/common.scss';
.fox-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  margin: 2px 0;
  &_inner {
    -webkit-appearance: none;
    background-color: $white;
    background-image: none;
    border-radius: 4px;
    border: 1px solid $dark-white;
    box-sizing: border-box;
    color: $default;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
    &:focus {
      outline: none;
      border-color: $primary;
    }

    &:disabled {
      @include disbale-set();
    }
  }
  &_suffix {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    .fox-input_icon {
      font-size: 16px;
      cursor: pointer;
      &:hover {
        color: $default;
      }
    }
  }
  & .fox-icon-view {
    display: none;
  }
  &:hover {
    .fox-icon-view {
      display: inline-block;
    }
  }
}
</style>
