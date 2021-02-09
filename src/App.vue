<template>
  <div id="app">
    <swiper ref="mySwiper" :options="swiperOption">
      <swiper-slide class="first">
        <slide1/>
      </swiper-slide>
      <swiper-slide class="second">
        <h2  style="color:green">爱，是有人等待</h2>
      </swiper-slide>
      <swiper-slide class="third">
        <h2 style="color:yellow">爱，是团团圆圆</h2>
        <img src="@/assets/img/speakoutlove.png" alt="">
      </swiper-slide>
      <swiper-slide class="fourth"/>
      <swiper-slide class="fifth"/>
    </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperSlide} from 'vue-awesome-swiper'
import slide1 from '@/components/Slide1'


export default {
  name: 'App',
  components: {
    Swiper,
    SwiperSlide,
    slide1
  },
  data() {
    return {
      currentIndex:0,
      swiperOption: {
        slidesPerView: 1,
        direction: 'vertical',
        width: window.innerWidth,
        height: window.innerHeight,
        effect:'fade',
        fadeEffect:{
          crossFade:true
        },
        on:{
          slideChangeTransitionEnd(){
            alert(this.activeIndex)
          }
        }
      }
    }
  }
}

</script>

<style scoped>
@import '~@/assets/font/font.css';
  swiper-slide{
    height: 100vh;
  }

  .first{
    top: 0;
    background: url("~@/assets/img/couplelove.jpg");
    background-size:calc(100vh) ;
    position: fixed;
    z-index: -1;
  }
  .second{
    background: url("~@/assets/img/home.jpg");
    top: 100vh;
    background-size:calc(100vh) ;
    position: fixed;
    z-index: -1;
  }
  .third{
    background: url("~@/assets/img/family.jpg");
    top: 200vh;
    background-size:100vw 100vh ;
    position: fixed;
    z-index: -1;
  }
  .third img{
    width: 50vw;
    height: 50vh;
    left: 24%;
    bottom: 25%;
    z-index: 1;
    position: absolute;
  }
</style>
