<template>
  <div>
    <!--  导航栏  -->
    <navbar/>
    <van-row type="flex" justify="center">
      <div class="Uploaderbk">
        <div class="showUpload">
          <uploader ref="uploader" @uploads="addPictureItem"/>
        </div>
      </div>
      <span id="introduce">{{ messages }}</span>
      <!--   在图片处理时进行显示   -->
      <van-overlay :show="showOverlay">
        <div class="loading">
          <van-loading size="24px">{{ text }}</van-loading>
        </div>
      </van-overlay>

      <van-button id="uploads" type="primary" @click="uploads"><p>变成动漫</p></van-button>
    </van-row>
    <!--  处理后图片弹窗显示  -->
    <van-dialog v-model="showDialog" show-cancel-button confirm-button-text="保存" :before-close="closeDialog">
      <img id="dialogPic" :src="src" alt="">
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
  components: {
    uploader,
    navbar
  },
  data() {
    return {
      showDialog: false,
      picture: null,
      //查看src是否有图片信息
      src: '',
      showOverlay: false,
      text: '正在处理中...',
      messages: '用户上传自己的照片后可以转换成为动漫风的照片。只有通过实名认证的用户可以参加此活动，每个用户只能参与一次。活动结束后，系统根据点赞数发放奖品到账户中，用户需要绑定手机号码，方便客服联系您及时发放奖品。'
    }
  },
  created() {
    window.savePicture = this.savePicture
  },
  methods: {
    addPictureItem(file) {
      this.picture = file.file
    },
    //弹窗询问
    uploads() {
      if(this.$refs.uploader.empty){
        Dialog.alert({
          message:'请添加图片'
        })
      }
      else{
        Dialog.confirm({
          message: '确定要将此图片动漫化吗?'
        }).then(() => {
          this.realUploads()
        }).catch(() => {
        })
      }
    },
    savePicture(){
      window.AndroidWaka.savePicture(this.src)
    },
    closeDialog(action, done) {
      if (action === 'confirm') {
        this.savePicture()
        done()
      }
      else{
        done();
      }
    },
    //上传图片
    realUploads() {
      this.showOverlay = true
      var formData = new FormData();
      formData.append("userId", '00031524-9faa-4154-97de-71cfdeddca16')
      formData.append("picture", this.picture)
      instance({
        url: '/waka/public/index.php/web/web/requestAnimalPictureByPicture',
        method: 'post',
        timeout:5000,
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        processData: false,// 告诉axios不要去处理发送的数据(重要参数)
        contentType: false,   // 告诉axios不要去设置Content-Type请求头
        data: formData,
      }).then(res => {
        if (res===undefined){
          Dialog.alert({
            message:'请检查网络或服务器繁忙'
          })
          this.showOverlay=false
        }
        else if (res.status == false) {
          this.showOverlay = false
          Dialog.alert({
            message: res.msg
          })
        } else {
          this.showOverlay = false
          this.showDialog = true;
          this.src = res.singleData
        }
      }).catch(err => {
      })
    }
  }
}


</script>

<style scoped>
#uploads {
  position: absolute;
  bottom: 3%;
  width: 80%;
  border-radius: 50px;
  background-color: #ff5b7d;
}

.Uploaderbk {
  width: 90vw;
  height: calc(90vw);
  border: 2px solid black;
  background-color: #f89917;
}

.showUpload {
  text-align: center;
  margin: 5% 5%;
  width: 80vw;
  height: calc(80vw);
  border: 2px solid white;
  border-radius: 8px;
  background-color: black;
}

p {
  font-size: 1.2rem;
  text-shadow: 0 0 1px white;
  font-family: 华文细黑;
}

#introduce {
  text-indent: 2rem;
  line-height: 1.5;
  font-size: 0.8rem;
  margin-top: 5%;
  width: 90%;
  font-family: simHei;
  text-shadow: 0 0 0.5px black;
}

.loading {
  position: absolute;
  top: 50%;
  left: 32%;
}
 #dialogPic{
   height:70vh;
   width: 100%;
 }
</style>