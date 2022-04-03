<template>
  <div class="find-password-form-container">
    <div class="find-password-box">
      <van-form @submit="onSubmit">
        <!-- 输入手机号或油箱，调起手机号键盘 -->
        <div class="van-login-page-cell-item">
          <van-cell-group inset>
            <van-field
              v-model="login.formModel.phone"
              type="text"
              placeholder="输入手机号"
            />
          </van-cell-group>
        </div>

        <!-- 密码 -->
        <div class="van-login-page-cell-item">
          <van-cell-group inset>
            <van-field
              v-model="login.formModel.password"
              autocomplete="true"
              type="password"
              placeholder="输入密码"
            />
          </van-cell-group>
        </div>

        <!-- 下一步按钮 -->
        <div class="van-login-page-cell-item-button">
          <van-button
            round
            block
            type="primary"
            native-type="submit"
            @click="setLoginType(LoginEnum.ModifyPassword)"
          >
            下一步
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

const onSubmit = () => {
  login.summitForm()
}
</script>

<style lang="scss" scoped>
.find-password-form-container {
  .find-password-box {
  }
}
</style>
