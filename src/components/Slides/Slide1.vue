<template>
  <div>
    <div class="animate__animated animate__fadeIn animate__delay-1s">
      <h2>爱</h2>
    </div>
    <div class="animate__animated animate__slideInLeft animate__delay-2s ">
      <h2 >是有人陪伴</h2>
    </div>
      <h5 class="bottomword"><van-icon name="down"/>下滑查看更多</h5>
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
  .bottomword{
    position: absolute;
    bottom: 0;
    color: grey;
    text-shadow: 0 0 2px black;
    left: 35%;
    font-size: 1rem;
  }
</style>