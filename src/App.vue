<template>
  <header>
    <SvgIcon name="icon1"></SvgIcon>
  </header>
  <VanButton type="primary" @click="color = 'red'">按钮</VanButton>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router"

const color = ref("yellow")
</script>

<style lang="scss" scoped>
@import "@/assets/base.css";
.test {
  background-color: v-bind("color");
  width: $var-svg-icon-default-size;
  height: 100px;
  .span {
    color: black;
    font-weight: bold;
    font-size: 30px;
  }
}
</style>
