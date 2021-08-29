<template>
  <div id="app">
    <div>
      <h2>form表单</h2>
      <fox-form :model="formData" @onSubmit="submitData" labelWidth="80px">
        <fox-form-item label="邮箱">
          <fox-input
            type="email"
            v-model="formData.username"
            placeholder="请输入邮箱"
          />
        </fox-form-item>
        <fox-form-item label="选择">
          <fox-switch v-model="formData.choice" />
        </fox-form-item>
        <fox-form-item>
          <fox-button type="primary" native-type="submit" plain>
            提交
          </fox-button>
        </fox-form-item>
      </fox-form>
    </div>
    <hr />
    <div>
      <h2>复选框</h2>
      <div>
        <fox-checkbox v-model="favor">跑步</fox-checkbox>
        <fox-checkbox-group v-model="hobby">
          <fox-checkbox label="王者">王者</fox-checkbox>
          <fox-checkbox label="写代码">写代码</fox-checkbox>
          <fox-checkbox label="篮球">篮球</fox-checkbox>
        </fox-checkbox-group>
      </div>
    </div>
    <hr />
    <div>
      <h2>单选框</h2>
      <div>
        <fox-radio v-model="gender" name="gender" label="1">男</fox-radio>
        <fox-radio v-model="gender" name="gender" label="2">女</fox-radio>
      </div>
      <fox-radio-group v-model="gender">
        <fox-radio name="gender" label="1">男</fox-radio>
        <fox-radio name="gender" label="2">女</fox-radio>
        <fox-radio name="gender" label="3">未知</fox-radio>
      </fox-radio-group>
    </div>
    <hr />
    <div>
      <h2>Switch 开关</h2>
      <fox-switch v-model="isSwitchAcitve" name="isActive"></fox-switch>
      <fox-switch
        v-model="isSwitchAcitve"
        active-color="red"
        in-active-color="black"
      ></fox-switch>
    </div>
    <hr />
    <div>
      <h2>输入框</h2>
      <fox-input placeholder="请输入姓名" v-model="username" clearable />
      <fox-input placeholder="请输入密码" type="password" showPassword />
      <fox-input placeholder="请输入年龄" type="number" />
      <fox-input placeholder="已禁止输入" disabled />
    </div>
    <hr />
    <h2>弹窗</h2>
    <fox-button @click="setDialogShow(true)">弹窗</fox-button>
    <div>
      <fox-dialog
        :visible="visible"
        styles="top:50%,max-width:300px"
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
    <h2>按钮</h2>
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
      visible: false,
      username: '',
      isSwitchAcitve: false,
      gender: '',
      favor: false,
      hobby: [],
      formData: {
        username: '',
        choice: false
      }
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
    },
    submitData() {
      console.log('提交的表单数据是：', this.formData)
    }
  },
  watch: {
    username(newVal) {
      console.log('username:', newVal)
    },
    isSwitchAcitve(newVal) {
      console.log('switch val', newVal)
    },
    gender(newVal) {
      console.log('gender val', newVal)
    }
  }
}
</script>

<style lang="scss"></style>
