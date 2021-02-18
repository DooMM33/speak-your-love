<template>
  <div>
    <van-uploader id="uploaders" v-model="pic" :after-read="afterRead" :preview-image=true :multiple="multiple">
    </van-uploader>
  </div>
</template>

<script>
import {instance} from "@/network/request";
import axios from 'axios'

export default {
  name: "Uploader",
  data() {
    return {
      pic: [],
      multiple: false
    }
  },
  methods: {
    afterRead(file) {
      this.$emit('uploads', file)
      // console.log(file.file)
    }
  }
}
</script>

<style lang="less">
</style>