<template>
  <div class="fox-form-item">
    <label class="fox-form-item_label" :style="labelStyle"
      >{{ label }}{{ label ? ':' : '' }}</label
    >
    <div class="fox-form-item_content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'foxFormItem',
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  inject: ['Form'],
  computed: {
    labelStyle() {
      const style = ''
      return this.Form.labelWidth
        ? style + `width:${this.Form.labelWidth}`
        : style
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/common.scss';
.fox-form-item {
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  &_label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: $default;
    line-height: inherit;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  &_content {
    line-height: inherit;
    position: relative;
    font-size: 14px;
    overflow: hidden;
  }
}
</style>
