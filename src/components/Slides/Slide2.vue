<template>
  <div>
    <div class="animate__animated animate__fadeIn animate__delay-1s">
      <h2>爱</h2>
    </div>
    <div class="animate__animated animate__fadeInRight animate__delay-2s" >
      <h2>是有人等待</h2>
    </div>
    <h5 class="bottomword"><van-icon name="down"/>下滑查看更多</h5>
  </div>
</template>

<script>


export default {
name: "Slide2",
}
</script>

<style scoped>
h2{
  margin-top: 10%;
  font-family: zkkl;
  text-align: center;
  color:lightskyblue;
  font-size: 3rem;
  text-shadow: 0 0 5px palevioletred;
}
.bottomword{
  position: absolute;
  bottom: 0;
  color: black;
  text-shadow: 0 0 2px white;
  left: 35%;
  font-size: 1rem;
}
</style>