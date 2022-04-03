<template>
  <div v-if="getShow(LoginEnum.FogetPassword)" class="register-form-container">
    <van-tabs
      v-model:active="active"
      shrink
      :swipeable="true"
      @click-tab="onClickTab"
    >
      <van-tab v-for="index in 2" :key="index" :title="titleMap[index]">
        <FindPassWordByphone
          v-if="titleMap[index] == LoginTabsTitle.phone"
        ></FindPassWordByphone>
        <FindPassWordByEmail
          v-if="titleMap[index] == LoginTabsTitle.email"
        ></FindPassWordByEmail>
      </van-tab>
    </van-tabs>
  </div>
  <div v-if="getShow(LoginEnum.ModifyPassword)">
    <ModifyPasswordForm></ModifyPasswordForm>
  </div>
</template>

<script setup lang="ts">
import type { clickTabType } from "@/types/vant/vant"
import { titleMap } from "@config/constant"
import { useThemeStore } from "@stores/theme"
import FindPassWordByphone from "./FindPassWordByphone.vue"
import FindPassWordByEmail from "./FindPassWordByEmail.vue"
import ModifyPasswordForm from "./ModifyPasswordForm.vue"
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
