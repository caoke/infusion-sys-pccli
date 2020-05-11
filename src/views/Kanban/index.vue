<template>
  <div class="kanban">
    <item v-for="(device,index) in list" :key="index" :data="device" />
  </div>
</template>

<script>
import Item from './Item'

export default {
  name: 'Kanban',
  components: { Item },
  data() {
    return {
      list: [
        {
          bedNo: 1, // 床位号
          deviceNo: '001', // 终端编号
          totalCapacity: '500ml', // 总容量
          remainingCapacity: '80%', // 剩余容量
          max: 80,
          min: 40,
          patient: {
            name: '六六',
            gender: '女',
            no: '123',
            type: '狐狸级别'
          }
        },
        {
          bedNo: 123, // 床位号
          deviceNo: '001', // 终端编号
          totalCapacity: '500ml', // 总容量
          remainingCapacity: '10%', // 剩余容量
          max: 80,
          min: 40,
          patient: {
            name: '六六',
            gender: '女',
            no: '123',
            type: '狐狸级别'
          }
        },
        {
          bedNo: 123, // 床位号
          deviceNo: '001', // 终端编号
          totalCapacity: '500ml', // 总容量
          remainingCapacity: '15%', // 剩余容量
          max: 80,
          min: 40,
          patient: {
            name: '六六',
            gender: '女',
            no: '123',
            type: '狐狸级别'
          }
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.kanban{
  display: flex;
  width: 100%;
  height: 100%;
  padding: 10px;
  background:#090990;
}
</style>
