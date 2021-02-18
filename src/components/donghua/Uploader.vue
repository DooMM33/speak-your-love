<template>
  <div>
    <van-uploader id="uploaders" v-model="pic" :after-read="afterRead" :preview-image=true :max-count="maxcount">
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
      maxcount:1,
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