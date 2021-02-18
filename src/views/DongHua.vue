<template>
  <div>
    <img src="@/assets/img/zi/erciyuan.png" alt="">
    <div class="Uploaderbk">
      <uploader @uploads="addPictureItem"/>
    </div>
    <van-row type="flex" justify="center">
      <van-button id="uploads" type="primary" @click="uploads"><p>变成动漫</p></van-button>
    </van-row>
<!--   明天这里写保存按钮的方法 -->
    <van-dialog v-show="show" show-cancel-button confirm-button-text="保存">
      <img :src="src" alt="">
    </van-dialog>
  </div>
</template>

<script>
import uploader from '@/components/donghua/Uploader'
import {instance} from "@/network/request";
import {Dialog} from "vant";

export default {
name: "DongHua",
  components:{
    uploader
  },
  data(){
   return {
     show:false,
     picture:null,
     //查看src是否有图片信息
     src:''
   }
  },
  methods:{
    addPictureItem(file){
      this.picture=file.file
    },
    uploads(){
       Dialog.confirm({
        message:'确定要将此图片动漫化吗?'
       }).then(()=>{
         this.realUploads()
       }).catch(()=>{})
    },
    realUploads(){
      var formData=new FormData();
      formData.append("userId",'00031524-9faa-4154-97de-71cfdeddca16')
      formData.append("picture",this.picture)
      instance({
        url:'/waka/public/index.php/web/web/requestAnimalPictureByPicture',
        method:'post',
        headers:{
          'Content-Type':'multipart/form-data'
        },
        processData: false,// 告诉axios不要去处理发送的数据(重要参数)
        contentType: false,   // 告诉axios不要去设置Content-Type请求头
        data:formData,
      }).then(res=>{
        console.log(res)
        if(res.status==false){
          Dialog.alert({
            message:res.msg
          })
        }
        else{
          setTimeout(()=>{
            this.show=true;
            this.src=res.singleData
          },5000)
        }
      }).catch(err=>{
        console.log(err);
      })
    }
  }
}
</script>

<style scoped>
  img{
    width: 100%;
  }
  #uploads{
    position: absolute;
    bottom: 10%;
    width: 80%;
    border-radius: 50px;
    background-color: #ff5b7d;
  }
  .Uploaderbk{
    height: 30vh;
    border: 2px dashed #a1a1a1;
  }
  p{
    font-size: 1.2rem;
    text-shadow: 0 0 1px white;
    font-family: 华文细黑;
  }
</style>