<template>
  <svg aria-hidden="true" class="svg-icon-default-class">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<script lang="ts" setup>
import { computed } from "vue"
const props = defineProps({
  prefix: {
    type: String,
    default: "icon",
  },
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "#333",
  },
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>

<style lang="scss" scoped>
.svg-icon-default-class {
  width: $var-svg-icon-default-size;
  height: $var-svg-icon-default-size;
}
</style>
