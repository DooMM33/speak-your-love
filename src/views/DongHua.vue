<template>
  <div>
    <img src="@/assets/img/zi/erciyuan.png" alt="">
    <div class="Uploaderbk">
      <uploader/>
    </div>
    <van-row type="flex" justify="center">
      <van-button id="uploads" type="primary" >上传图片</van-button>
    </van-row>
  </div>
</template>

<script>
import uploader from '@/components/donghua/Uploader'

export default {
name: "DongHua",
  components:{
    uploader
  },
  data(){
   return {
     pictures:[],
     show:true
   }
  }
}
</script>

<style scoped>
  img{
    width: 100%;
  }
  #uploads{
    margin-top: 25%;
  }
  .Uploaderbk{
    height: 30vh;
    border: 2px dashed #a1a1a1;
  }

</style>