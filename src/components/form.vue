<template>
  <div class="fox-form">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'foxForm',
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: ''
    }
  },
  provide() {
    return {
      Form: this
    }
  }
}
</script>

<style>
</style>
