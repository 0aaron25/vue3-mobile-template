<template>
  <div class="register-form-container">
    <div class="login-box">
      <van-form @submit="onSubmit">
        <!-- 输入手机号或油箱，调起手机号键盘 -->
        <div class="van-login-page-cell-item">
          <van-cell-group inset>
            <van-field
              v-model="formModel.phone"
              type="text"
              label="+86"
              placeholder="输入手机号"
            />
          </van-cell-group>
        </div>

        <!-- 验证码 -->
        <div class="van-login-page-cell-item">
          <van-cell-group inset>
            <van-field
              v-model="formModel.captcha"
              autocomplete="true"
              type="password"
              placeholder="输入验证码"
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

        <!-- 密码 -->
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

        <!-- 登录按钮 -->
        <div class="van-login-page-cell-item-button">
          <van-button round block type="primary" native-type="submit">
            注册
          </van-button>
        </div>

        <!-- 已有账号，前往登录 -->
        <div class="van-login-page-cell-item-button">
          <van-button
            round
            block
            type="default"
            @click="setLoginType(LoginEnum.Login)"
          >
            已有账号，前往登录
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLoginStore } from "@stores/login"
import { LoginEnum } from "@/enums/index"
import useLogin from "@/hooks/useLogin"
const { setLoginType } = useLogin()
const login = useLoginStore()
const { formModel } = storeToRefs(login)
const onSubmit = () => {
  login.summitForm()
}
</script>

<style lang="scss" scoped></style>
