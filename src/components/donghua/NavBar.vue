<template>
  <div>
    <van-nav-bar @click-left="onClickLeft">
      <template #title>
        <p style="font-family: simHei;text-shadow: 0 0 1px black">发布</p>
      </template>
      <template #left>
        <van-icon name="arrow-left" color="black" size="20"/>
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
name: "NavBar",
  methods:{
    onClickLeft(){
      console.log('返回');
    }
  }
}
</script>

<style scoped>

</style>