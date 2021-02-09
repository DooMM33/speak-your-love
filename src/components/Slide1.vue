<template>
  <div>
    <div class="animate__animated animate__fadeIn">
      <h2 style="font-family: Ebrima;text-align: center;color:hotpink;font-size: 3rem">爱</h2>
    </div>
    <div class="animate__animated animate__slideInLeft animate__delay-1s ">
      <h2 style="font-family: Ebrima;text-align: center;color:hotpink;font-size: 3rem">是有人陪伴</h2>
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
    text-shadow: black;
  }
  div{
    animation-fill-mode: backwards,backwards;
  }
</style>