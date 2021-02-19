<template>
  <div>
    <div class="showUpload">
      <p>上传图片</p>
      <van-uploader id="uploaders" v-model="pic" :after-read="afterRead" :preview-image=true :max-count="maxcount" preview-size=80vw>
        <template #default>
          <van-button id="addPicture" type="primary" icon="plus" color="#f89917">添加照片</van-button>
        </template>
      </van-uploader>
    </div>
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

<style scoped>
 .showUpload{
   margin-top: -4%;
  width: 80vw;
  height: calc(80vw);
 }
 p{
   margin: 10px;
   color: white;
   bottom: 0;
 }
 #addPicture{
   margin-top: 85%;
 }
</style>