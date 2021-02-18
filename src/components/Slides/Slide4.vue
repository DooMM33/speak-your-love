<template>
  <div>
    <div class="animate__animated animate__fadeIn animate__delay-1s">
      <h2>现在</h2>
    </div>
    <div class="animate__animated animate__bounceIn animate__delay-2s ">
      <h2>大声说出爱吧</h2>
    </div>
    <div class="animate__animated animate__bounceIn animate__delay-3s">
      <img src="@/assets/img/zi/erciyuan.png" alt="">
    </div>
    <h5 class="bottomword"><van-icon name="down"/>下滑查看更多</h5>
  </div>
</template>

<script>
export default {
name: "Slide4"
}
</script>

<style scoped>
  h2 {
    margin-top: 10%;
    text-align: center;
    font-family: zkkl;
    font-size: 3rem;
    color: lightgoldenrodyellow;
    text-shadow: 0 0 3px black;
  }
  img{
    position: absolute;
    width: 100%;
    margin-top: 55%;
  }
  .bottomword{
    position: absolute;
    bottom: 0;
    color: greenyellow;
    text-shadow: 0 0 2px black;
    left: 35%;
    font-size: 1rem;
  }
</style>