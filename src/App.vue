<template>
  <van-config-provider :theme-vars="theme.themeVars">
    <RouterView />
  </van-config-provider>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router"
import { useThemeStore } from "@stores/theme"
const theme = useThemeStore()
</script>

<style lang="scss" scoped>
@import "@/assets/base.css";
</style>
