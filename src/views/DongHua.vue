<template>
  <div>
    <navbar/>
    <van-row type="flex" justify="center">
      <div class="Uploaderbk">
        <div class="showUpload">
          <uploader @uploads="addPictureItem"/>
        </div>
      </div>
      <span id="introduce">{{messages}}</span>
      <van-overlay :show="showOverlay">
        <van-loading size="24px">{{text}}</van-loading>
      </van-overlay>
      <van-button id="uploads" type="primary" @click="uploads"><p>变成动漫</p></van-button>
    </van-row>
<!--   明天这里写保存按钮的方法 -->
    <van-dialog v-model="showDialog" show-cancel-button confirm-button-text="保存">
      <img :src="src" alt="">
    </van-dialog>
  </div>
</template>

<script>
import uploader from '@/components/donghua/Uploader'
import navbar from '@/components/donghua/NavBar'
import {instance} from "@/network/request";
import {Dialog} from "vant";

export default {
name: "DongHua",
  components:{
    uploader,
    navbar
  },
  data(){
   return {
     showDialog:false,
     picture:null,
     //查看src是否有图片信息
     src:'',
     showOverlay:false,
     text:'正在处理中...',
     messages:'用户上传自己的照片后可以转换成为动漫风的照片。只有通过实名认证的用户可以参加此活动，每个用户只能参与一次。活动结束后，系统根据点赞数发放奖品到账户中，用户需要绑定手机号码，方便客服联系您及时发放奖品。'
   }
  },
  methods:{
    addPictureItem(file){
      this.picture=file.file
    },
    //弹窗询问
    uploads(){
       Dialog.confirm({
        message:'确定要将此图片动漫化吗?'
       }).then(()=>{
         this.realUploads()
       }).catch(()=>{})
    },
    //上传图片
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
        this.showOverlay=true
        console.log(res)
        if(res.status==false){
          this.showOverlay=false
          Dialog.alert({
            message:res.msg
          })
        }
        else{
          this.showOverlay=false
          this.showDialog=true;
          this.src=res.singleData
        }
      }).catch(err=>{
        console.log(err);
      })
    }
  }
}
</script>

<style scoped>
  #uploads{
    position: absolute;
    bottom: 3%;
    width: 80%;
    border-radius: 50px;
    background-color: #ff5b7d;
  }
  .Uploaderbk{
    width: 90vw;
    height: calc(90vw);
    border: 2px solid black;
    background-color: black;
  }
  .showUpload{
    text-align: center;
    margin:5% 5%;
    width: 80vw;
    height: calc(80vw);
    border: 2px solid white;
    border-radius: 8px;
  }
  p{
    font-size: 1.2rem;
    text-shadow: 0 0 1px white;
    font-family: 华文细黑;
  }

  #introduce{
    text-indent: 2rem;
    line-height: 1.5;
    font-size: 0.8rem;
    margin-top: 5%;
    width: 90%;
    font-family: simHei;
    text-shadow: 0 0 0.5px black;
  }
</style>