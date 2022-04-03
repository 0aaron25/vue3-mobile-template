<template>
  <div class="login-form-container">
    <div class="login-box">
      <van-form @submit="onSubmit">
        <!-- 密码 -->
        <div class="van-login-page-cell-item">
          <van-cell-group inset>
            <van-field
              v-model="formModel.password"
              autocomplete="true"
              type="password"
              placeholder="输入密码"
            />
          </van-cell-group>
        </div>
        <!-- 再次输入密码密码 -->
        <div class="van-login-page-cell-item">
          <van-cell-group inset>
            <van-field
              v-model="formModel.repassword"
              autocomplete="true"
              type="password"
              placeholder="再次输入密码"
            />
          </van-cell-group>
        </div>

        <!-- 提交 -->
        <div class="van-login-page-cell-item-button">
          <van-button round block type="primary"> 提交 </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLoginStore } from "@stores/login"
const login = useLoginStore()

const { formModel } = storeToRefs(login)

const onSubmit = () => {
  login.summitForm()
}
</script>

<style lang="scss" scoped>
.login-form-container {
  .login-box {
    .van-cell-item-forget-password-box {
      text-align: right;
      padding: 0 $var-spacing-col-base;
      .van-cell-item-forget-password-text {
        color: $var-theme-color;
      }
    }
  }
}
</style>
