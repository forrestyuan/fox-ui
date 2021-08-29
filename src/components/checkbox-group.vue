<template>
  <div class="fox-checkbox-group">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'foxCheckboxGroup',
  props: {
    value: Array
  },
  provide() {
    return {
      CheckboxGroup: this
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
