<template>
  <div>
    <swiper ref="mySwiper" :options="swiperOption">
      <swiper-slide class="first">
        <slide1 v-show="currentIndex===0"/>
      </swiper-slide>
      <swiper-slide class="second">
        <slide2 v-show="currentIndex===1"/>
      </swiper-slide>
      <swiper-slide class="third">
        <slide3 v-show="currentIndex===2"/>
      </swiper-slide>
      <swiper-slide class="fourth">
        <slide4 v-show="currentIndex===3"/>
      </swiper-slide>
      <swiper-slide class="fifth">
        <slide5 v-show="currentIndex===4" @changePage="changePage"/>
      </swiper-slide>

    </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperSlide} from 'vue-awesome-swiper'
import slide1 from '@/components/Slides/Slide1';
import slide2 from '@/components/Slides/Slide2';
import slide3 from '@/components/Slides/Slide3';
import slide4 from '@/components/Slides/Slide4';
import slide5 from '@/components/Slides/Slide5';
export default {
  name: "Slides",
  components: {
    Swiper,
    SwiperSlide,
    slide1,
    slide2,
    slide3,
    slide4,
    slide5
  },
  data() {
    let vm=this;
    return {
      currentIndex:0,
      swiperOption: {
        slidesPerView: 1,
        direction: 'vertical',
        autoHeight:true,
        height:window.innerHeight,
        width:window.innerWidth,
        autoplay:{
          delay:5000,
          stopOnLastSlide:true,
          waitForTransition:true
        },
        effect:'fade',
        fadeEffect:{
          crossFade:true
        },
        on:{
          slideChange(){
            vm.currentIndex=this.activeIndex
            console.log(this.activeIndex)
          }
        }
      }
    }
  },
  methods:{
    changePage(){
      this.$router.replace('/donghua')
    }
  }
}
</script>

<style scoped>
swiper-slide{
  height: 100vh;
}

.first{
  background: url("../assets/img/couplelove.png");
  background-size:calc(100vh) ;
  position: fixed;
  z-index: -1;
  top: 0;
}
.second {
  background: url("../assets/img/home.png");
  background-size:calc(100vh) ;
  position: fixed;
  z-index: -1;
  top: 100vh;
}
.third{
  background: url("../assets/img/redback.png");
  background-size:calc(100vh) ;
  position: fixed;
  z-index: -1;
  top: 200vh;
}
.fourth{
  background: url("../assets/img/4back.png");
  background-size:calc(100vh) ;
  position: fixed;
  z-index: -1;
  top:300vh;
}
.fifth{
  background: url("../assets/img/4back.png");
  background-size:calc(100vh);
  position: relative;
  z-index: -1;
  top:400vh;
}
#tabbar{
  opacity: 0.5;
}

</style>