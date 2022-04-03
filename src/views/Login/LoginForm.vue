<template>
  <div v-if="getShow(LoginEnum.Login)" class="login-form-container">
    <div class="login-box">
      <van-form @submit="onSubmit">
        <!-- 输入手机号或油箱，调起手机号键盘 -->
        <div class="van-login-page-cell-item">
          <van-cell-group inset>
            <van-field
              v-model="formModel.phoneOrEmail"
              type="text"
              placeholder="输入手机号/邮箱"
            />
          </van-cell-group>
        </div>

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

        <!-- 登录按钮 -->
        <div class="van-login-page-cell-item-button">
          <van-button round block type="primary" native-type="submit">
            登录
          </van-button>
        </div>

        <!-- 忘记密码 -->
        <div class="van-cell-item-forget-password-box">
          <span
            class="van-cell-item-forget-password-text"
            @click="setLoginType(LoginEnum.FogetPassword)"
            >忘记密码?</span
          >
        </div>

        <!-- 没有账号立即注册 -->
        <div class="van-login-page-cell-item-button">
          <van-button
            round
            block
            type="default"
            @click="setLoginType(LoginEnum.Register)"
          >
            没有账号立即注册
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLoginStore } from "@stores/login"
import useLogin from "@/hooks/useLogin"
import { LoginEnum } from "@/enums/index"
const login = useLoginStore()
const { setLoginType, getShow } = useLogin()
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
        font-size: $var-font-size-lg;
      }
    }
  }
}
</style>
