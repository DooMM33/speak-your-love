<template>
  <div>
    <div class="animate__animated animate__fadeIn animate__delay-1s">
      <h2>爱</h2>
    </div>
    <div class="animate__animated animate__slideInLeft animate__delay-2s ">
      <h2 >是有人陪伴</h2>
    </div>
  </div>

</template>

<script>


export default {
name: "Slide1",

}
</script>

<style scoped>
  h2{
    margin-top: 20%;
    text-shadow: 0 0 3px white;
    font-family: zkkl;
    text-align: center;
    color:mediumpurple;
    font-size: 3rem
  }
  div{
    animation-fill-mode: backwards,backwards;
  }
</style>