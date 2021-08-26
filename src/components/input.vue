<template>
  <div class="fox-input">
    <input
      class="fox-input_inner"
      :type="type"
      :placeholder="placeholder"
      :name="name"
      :disabled="disabled"
      :value="value"
      @input="handleInput"
    />
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
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>
<style lang="scss" scoped>
$white: #fff;
$dark-white: #dcdfe6;
$default: #555;
$primary: rgb(22, 123, 255);
$warning: rgb(197, 189, 69);
$danger: rgb(248, 87, 87);
@mixin disbale-set() {
  border: solid 1px $default;
  filter: alpha(opacity=30);
  opacity: 0.3;
  &:hover {
    cursor: not-allowed;
  }
}
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
}
</style>
