<template>
  <div id="app">
    <fox-button @click="setDialogShow(true)">弹窗</fox-button>
    <div>
      <fox-dialog
        :visible="visible"
        style="top:50%,max-width:300px"
        title="温馨提示"
        @onOk="handleOk"
        @onCancel="handleCancel"
      >
        <ul>
          <li v-for="(val, idx) in new Array(3)" :key="val">
            {{ `哈哈哈哈${idx}` }}
          </li>
        </ul>
      </fox-dialog>
    </div>
    <hr />
    <div>
      <fox-button @click="handleClick">我是按钮</fox-button>
      <fox-button type="primary">我是按钮</fox-button>
      <fox-button type="warning">我是按钮</fox-button>
      <fox-button type="danger">我是按钮</fox-button>
    </div>
    <div>
      <fox-button disabled @click="handleClick">我是按钮</fox-button>
      <fox-button disabled type="primary">我是按钮</fox-button>
      <fox-button disabled type="warning">我是按钮</fox-button>
      <fox-button disabled type="danger">我是按钮</fox-button>
    </div>
    <div>
      <fox-button round plain>我是按钮</fox-button>
      <fox-button round plain type="primary">我是按钮</fox-button>
      <fox-button round plain type="warning">我是按钮</fox-button>
      <fox-button round plain type="danger">我是按钮</fox-button>
    </div>
    <div>
      <fox-button circle plain>按</fox-button>
      <fox-button circle plain type="primary">按</fox-button>
      <fox-button circle plain type="warning">按</fox-button>
      <fox-button circle plain type="danger">按</fox-button>
    </div>
    <div>
      <fox-button disabled circle plain icon="lollipop"></fox-button>
      <fox-button circle plain type="primary" icon="ice-cream" />
      <fox-button circle plain type="warning" icon="ice-cream" />
      <fox-button circle plain type="danger" icon="ice-cream" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      visible: true
    }
  },
  methods: {
    setDialogShow(isShow) {
      this.visible = isShow
    },
    handleClick() {
      alert('you fucking click me')
    },
    handleOk() {
      this.setDialogShow(false)
    },
    handleCancel() {
      this.setDialogShow(false)
    }
  }
}
</script>

<style lang="scss">
</style>
