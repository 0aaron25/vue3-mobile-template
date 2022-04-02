<template>
  <main>
    <van-button type="primary" @click="onLoginClick">点我登录</van-button>
  </main>
</template>

<script setup lang="ts">
import { login } from "@/api/user/userLogin"
import type { ILoginParams } from "@/types/user/user"
import to from "await-to-js"
const onLoginClick = async () => {
  const params: ILoginParams = {
    username: "admin",
    password: "123456",
  }

  const logindata = await login(params)
  console.log(logindata)
}
</script>
