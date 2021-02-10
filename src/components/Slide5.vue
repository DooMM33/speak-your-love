<template>
  <div>
    <div class="animate__animated animate__bounceOutUp">
      <h2>现在</h2>
    </div>
    <div class="animate__animated animate__bounceOutUp">
      <h2>大声说出爱吧</h2>
    </div>
    <div class="animate__animated animate__bounceOutDown">
      <img id="erci" src="@/assets/img/zi/erciyuan.png" alt="">
    </div>
    <div class="animate__animated animate__bounceInUp animate__delay-1s">
      <img id="neirong" src="@/assets/img/zi/hdnr.png" alt="">
      <img id="blackboard" src="@/assets/img/blackboard.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "Slide5"
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
#erci{
  position: absolute;
  width: 100%;
  margin-top: 55%;
}

#neirong{
  position: absolute;
  width: 100%;
  margin-top: -50%;
}
#blackboard{
  position: absolute;
  width: 100%;
  margin-top: -18%;
  z-index: -1;
}

</style>