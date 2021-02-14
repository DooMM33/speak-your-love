<template>
  <div>
    <img src="@/assets/img/zi/erciyuan.png" alt="">
    <van-row type="flex" justify="center">
      <van-image-preview :images="pictures"/>
      <van-uploader v-model="pictures" :after-read="afterRead">
        <van-button icon="plus" type="primary" >上传图片</van-button>
      </van-uploader>
    </van-row>
  </div>

</template>

<script>

export default {
name: "DongHua",
  data(){
   return {
     pictures:[],
     show:true
   }
  },
  methods:{
    afterRead(file){
      console.log(file)
    }
  }
}
</script>

<style scoped>
  van-button{
    position:absolute;
    left: 50%;
  }
  img{
    width: 100%;
  }
</style>