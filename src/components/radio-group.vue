<template>
  <div class="fox-radio-group">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'foxRadioGroup',
  props: {
    value: [String, Boolean, Number]
  },
  provide() {
    return {
      RadioGroup: this
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
