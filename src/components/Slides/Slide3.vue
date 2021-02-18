<template>
  <div>
    <div class="animate__animated animate__fadeIn animate__delay-1s">
      <img id="rice" src="@/assets/img/tuanyuan.png" alt="">
      <img id="lamp" src="@/assets/img/lamp.png" alt="">
    </div>
    <div class="animate__animated animate__fadeIn animate__delay-2s">
      <h2>爱</h2>
    </div>
    <div class="animate__animated animate__fadeInDown animate__delay-3s" >
      <h2>是团团圆圆</h2>
    </div>
    <h5 class="bottomword"><van-icon name="down"/>下滑查看更多</h5>
  </div>
</template>

<script>
export default {
name: "Slide3"
}
</script>

<style scoped>
h2{
  margin-top: 23%;
  font-family: zkkl;
  text-align: center;
  color:antiquewhite;
  font-size: 3rem;
}

#rice{
  height: 37vh;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%,-30%,0);
}
#lamp{
  width: 100vw;
  position: absolute;
  top: 0;
}
.bottomword{
  position: absolute;
  bottom: 0;
  color: indianred;
  text-shadow: 0 0 2px black;
  left: 35%;
  font-size: 1rem;
}
</style>