<template>
  <div>
    <div class="showUpload">
      <van-uploader id="uploaders" :before-read="beforeRead" :max-size="4*1024*1024" @oversize="overSize" v-model="pic" :after-read="afterRead" :preview-image=true :max-count="maxcount" preview-size=80vw>
        <template #default>
          <van-button id="addPicture" type="primary" icon="plus" color="#f89917">添加照片</van-button>
        </template>
      </van-uploader>
    </div>
  </div>
</template>

<script>
import {Dialog} from "vant";
export default {
  name: "Uploader",
  data() {
    return {
      pic: [],
      maxcount:1,
      empty:true
    }
  },
  updated() {
    if((this.pic || []).length!=0){
      this.empty=false
    }else{
      this.empty=true
    }
  },
  methods: {
    afterRead(file) {
      this.$emit('uploads', file)
      // console.log(file.file)
    },
    beforeRead(file){
      if(file.type!=='image/jpeg' && file.type!=='image/png' && file.type!=='image/jpg'){
        Dialog.alert({
          message:'不支持该格式，请换其他图片'
        })
        return false
      }
      return true
    },
    overSize(file){
      Dialog.alert({
        message:'图片超过4MB，请使用其他图片'
      })
    }
  }
}
</script>

<style scoped>
 .showUpload{
  width: 80vw;
  height: calc(80vw);
 }
 p{
   margin: 10px;
   color: white;
   bottom: 0;
 }
 #addPicture{
   margin-top: 100%;
 }
</style>