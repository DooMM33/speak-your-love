<template>
  <div>
    <div class="animate__animated animate__fadeIn">
      <img id="redback" src="@/assets/img/redback.jpg" alt="">
    </div>
    <div class="animate__animated animate__fadeIn">
      <img src="@/assets/img/tuanyuan.png" alt="">
    </div>
    <div class="animate__animated animate__fadeIn animate__delay-1s">
      <h2>爱</h2>
    </div>
    <div class="animate__animated animate__fadeInDown animate__delay-2s" >
      <h2>是团团圆圆</h2>
    </div>

  </div>

</template>

<script>
export default {
name: "Slide3"
}
</script>

<style scoped>
h2{
  margin-top: 20%;
  font-family: zkkl;
  text-align: center;
  color:antiquewhite;
  font-size: 3rem;

}
#redback{
  top: 0;
  height: 100vh;
  left: 0;
  width: auto;
  position: fixed;
  z-index: -1;
}
img{
  height: 37vh;
  position: absolute;
  top: 35%;
}
</style>