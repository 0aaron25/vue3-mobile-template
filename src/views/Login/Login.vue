<template>
  <div class="login-container">
    <RegisterForm></RegisterForm>
    <FogetPasswordForm></FogetPasswordForm>
    <LoginForm1></LoginForm1>
  </div>
</template>

<script setup lang="ts">
import RegisterForm from "../register/RegisterForm.vue"
import LoginForm1 from "./LoginForm.vue"
import { useThemeStore } from "@stores/theme"
import FogetPasswordForm from "./FindPassWord/FogetPasswordForm.vue"
const theme = useThemeStore()
/**asdasd
 * 设置tabs主题
 */
theme.setThemeVars({
  cellGroupInsetBorderRadius: "20px",
  cellBackgroundColor: "#f1f3f4",
  buttonPrimaryBackgroundColor: "#80d3c5",
  buttonPrimaryBorderColor: "#80d3c5",
  buttonDefaultBorderColor: "#80d3c5",
  buttonDefaultColor: "#5a5f71",
})
</script>

<style lang="scss" scoped></style>
