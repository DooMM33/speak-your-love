<template>
  <div>
    <van-uploader id="uploaders" v-model="pictures" :after-read="afterRead">
    </van-uploader>
  </div>
</template>

<script>
import {instance} from "@/network/request";
import axios from 'axios'
export default {
  name: "Uploader",
  data(){
    return {
      pictures:[]
    }
  },
  methods:{
    afterRead(file){
      axios.post('http://mobile.youdpi.com:4001/',{
        headers:{
          'Content-type':'multipart/form-data'
        },

        params:{
          uid:'00031524-9faa-4154-97de-71cfdeddca16',
          pic:file
        }
      })
      .then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
      console.log(file)
    }
  }
}
</script>

<style lang="less">
</style>