<template>
  <div v-if="getShow(LoginEnum.Register)" class="register-form-container">
    <van-tabs v-model:active="active" shrink swipeable @click-tab="onClickTab">
      <van-tab v-for="index in 2" :key="index" :title="titleMap[index]">
        <RegisterByPhone
          v-if="titleMap[index] == LoginTabsTitle.phone"
        ></RegisterByPhone>
        <RegisterByEmail
          v-if="titleMap[index] == LoginTabsTitle.email"
        ></RegisterByEmail>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup lang="ts">
import type { clickTabType } from "@/types/vant/vant"
import { titleMap } from "@config/constant"
import { useThemeStore } from "@stores/theme"
import RegisterByPhone from "./RegisterByPhone.vue"
import RegisterByEmail from "./RegisterByEmail.vue"
import useLogin from "@/hooks/useLogin"
import { LoginEnum, LoginTabsTitle } from "@/enums/index"
const { getShow } = useLogin()
const theme = useThemeStore()
const active = ref(0)
const onClickTab = (tab: clickTabType) => {
  console.log(tab)
}

theme.setThemeVars({
  tabsBottomBarWidth: "20px",
  tabsBottomBarColor: "#2f9988",
  tabFontSize: "16px",
})
</script>

<style lang="scss" scoped></style>
