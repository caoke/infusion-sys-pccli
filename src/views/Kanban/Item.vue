<template>
  <div class="device-item normal">
    <div class="header">
      <div class="device-no">{{ data.deviceNo }}</div>
      <i class="iconfont icondianliang" />
    </div>
    <div class="shuye">
      <!-- <i class="iconfont iconshuye" /> -->
      <div class="shuyedai" :style="{height: totalHeight}">
        <span class="bed"> {{ data.bedNo }}</span>
        <div class="shuyedai_empty" :style="{height: emptyHeight}" />
        <div class="shuyedai_bg" :style="{height: bgHeight}" />
        <div class="shuye_line">
          <div class="box" />
          <div class="short" />
          <div class="long" />
        </div>
      </div>

      <div class="device-status">
        <span> {{ data.max }}</span>
        <i class="el-icon-video-play" />
        <span> {{ data.min }}</span>
      </div>
    </div>
    <div class="info">
      <span> {{ data.remainingCapacity }}</span>
      <span>{{ data.totalCapacity }}</span>
    </div>
    <div class="patient">
      <div class="tr-item">
        <span>{{ data.patient.name }}</span>
        <span>{{ data.patient.no }}</span>
      </div>
      <div class="tr-item">
        <span>{{ data.patient.gender }}</span>
        <span>{{ data.patient.type }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeviceItem',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      totalHeight: 80
    }
  },
  computed: {
    emptyHeight() {
      return (1 - parseInt(this.data.remainingCapacity) / 100) * this.totalHeight + 'px'
    },
    bgHeight() {
      return parseInt(this.data.remainingCapacity) / 100 * this.totalHeight + 'px'
    }
  }

}
</script>

<style lang="scss" scoped>
.normal{
  background: #5583ec;
}
.device-item {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 8px;
  color: #ffffff;
  margin: 0 5px;

  .header,.shuye, .patient{
    padding: 5px;
  }
  .header{
    display: flex;
    justify-content: space-between;
    .device-no{
      padding: 1px;
      width: 28px;
      height: 28px;
      line-height: 28px;
      text-align: center;
      border: 1px solid #ffffff;
      border-radius: 50%;
    }
    i{
      font-size: 32px;
    }
  }
  .shuye{
    margin-top: -20px;
    margin-left: 52px;
    position: relative;

    .shuyedai{
      margin-right: 30px;
      float: left;
      width: 60px;
      border-radius: 8px;
      text-align: center;
      .bed{
        position: absolute;
        color: #333;
        font-size: 38px;
        top: 0px;
        left: 0px;
        width: 60px;
        margin-top: 20px;
      }
      .shuyedai_empty{
        background: #ffffff;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
      }

      .shuyedai_bg{
        z-index: 1;
        border-bottom-right-radius: 8px;
        border-bottom-left-radius: 8px;
        background-color: aqua;

      }
      .shuye_line{
        margin-left: 16px;
        margin-top: -6px;
        .box{
          width: 28px;
          height: 10px;
          border-radius: 4px;
          background: aqua;
        }
        .short{
          margin-left: 10px;
          width: 3px;
          height: 6px;
          background: aqua;
          border-radius: 4px;
          float: left;

        }
        .long{
          margin-left: 17px;
          width: 3px;
          height: 10px;
          background: aqua;
          border-radius: 4px;
        }
      }
    }

    .device-status{
      display: flex;
      flex-direction: column;
      margin-top: 10px;
      i{
        margin: 8px 0;
      }
    }
  }
  .info{
    clear: both;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;

  }
  .patient{
    position: absolute;
    bottom: 0px;
    background: #333;
    opacity: 0.7;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    width: 100%;
    padding: 5px 10px;
    box-sizing: border-box;
    .tr-item{
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
