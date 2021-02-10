<template>
  <div>
    <div class="animate__animated animate__fadeIn">
      <img src="@/assets/img/home.jpg" alt="">
    </div>
    <div class="animate__animated animate__fadeIn animate__delay-1s">
      <h2>爱</h2>
    </div>
    <div class="animate__animated animate__fadeInRight animate__delay-2s" >
      <h2>是有人等待</h2>
    </div>
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
.second{
  background: url("~@/assets/img/home.jpg");
  top: 100vh;
  background-size:calc(100vh) ;
  position: fixed;
  z-index: -1;
}
img{
  position: fixed;
  top: 0;
  height: 100vh;
  z-index: -1;
}
</style>