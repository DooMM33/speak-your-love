<template>
  <div id="app">
    <swiper ref="mySwiper" :options="swiperOption">
      <swiper-slide class="first" v-show="currentIndex===0">
        <slide1/>
      </swiper-slide>
      <swiper-slide class="second" v-show="currentIndex===1">
        <slide2/>
      </swiper-slide>
      <swiper-slide class="third" v-show="currentIndex===2">
        <slide3/>
      </swiper-slide>
      <swiper-slide class="fourth"/>
      <swiper-slide class="fifth"/>
    </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperSlide} from 'vue-awesome-swiper'
import slide1 from '@/components/Slide1'
import slide2 from '@/components/Slide2'
import slide3 from '@/components/Slide3'
import {swiperAnimate, swiperAnimateCache} from "@/common/swiper.animate.min";


export default {
  name: 'App',
  components: {
    Swiper,
    SwiperSlide,
    slide1,
    slide2,
    slide3
  },
  data() {
    let vm=this;
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
          slideChange(){
            vm.currentIndex=this.activeIndex
          }
        }
        }
      }
  },

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
