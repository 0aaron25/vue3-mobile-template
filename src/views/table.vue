<template>
  <el-table :data="tableData">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
    <el-table-column fixed="right" label="Operations" width="120">
      <template #default>
        <el-button type="text" size="small">Detail</el-button>
        <el-button type="text" size="small">Edit</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue"
const visible = ref(false)
const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom1",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom2",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom3",
    address: "No. 189, Grove St, Los Angeles",
  },
]

const rowInstance = reactive({ value: {} })
const handleClick = (row: object) => {
  visible.value = !visible.value
  rowInstance.value = row
}

defineExpose({
  rowInstance,
})
</script>

<style lang="scss" scoped></style>
