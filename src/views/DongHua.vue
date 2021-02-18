<template>
  <div>
    <img src="@/assets/img/zi/erciyuan.png" alt="">
    <div class="Uploaderbk">
      <uploader @uploads="addPictureItem"/>
    </div>
    <van-row type="flex" justify="center">
      <van-button id="uploads" type="primary" @click="uploads">上传图片</van-button>
    </van-row>
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
     show:true,
     picture:null
   }
  },
  methods:{
    addPictureItem(file){
      this.picture=file.file
      console.log(this.picture)
    },
    uploads(){
      // Dialog.confirm({
      //   message:'确定要将此图片动漫化吗?'
      // })
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
        if(res.status==false){
          Dialog.alert({
            message:res.msg
          })
        }
        console.log(res)
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
    margin-top: 25%;
  }
  .Uploaderbk{
    height: 30vh;
    border: 2px dashed #a1a1a1;
  }

</style>