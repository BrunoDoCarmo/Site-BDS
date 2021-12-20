<template>
  
<section class="review" id="review">
  <h1 class="heading"> customer's <span>review</span> </h1>
  <div class="swiper review-slider">
    <div class="swiper-wrapper">
      <div class="swiper-slide box">
        <img src="../assets/image/pic-1.png" alt="">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde sunt fugiat dolore ipsum id est maxime ad tempore quasi tenetur.</p>
        <h3>john deo</h3>
        <div class="stars">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
        </div>
      </div>
      <div class="swiper-slide box">
        <img src="../assets/image/pic-2.png" alt="">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde sunt fugiat dolore ipsum id est maxime ad tempore quasi tenetur.</p>
        <h3>john deo</h3>
        <div class="stars">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
        </div>
      </div>
      <div class="swiper-slide box">
        <img src="../assets/image/pic-3.png" alt="">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde sunt fugiat dolore ipsum id est maxime ad tempore quasi tenetur.</p>
        <h3>john deo</h3>
        <div class="stars">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
        </div>
      </div>
      <div class="swiper-slide box">
        <img src="../assets/image/pic-4.png" alt="">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde sunt fugiat dolore ipsum id est maxime ad tempore quasi tenetur.</p>
        <h3>john deo</h3>
        <div class="stars">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
<script>
import { createStore } from 'vuex'
// import slide from '../store/script1.js'
// import swiper from '../store/swiper.js'

export default createStore({
  // slide,
  // swiper
})
</script>
<style scoped>
.review .review-slider{
  padding:1rem;
}
.review .review-slider .box{
  background: #fff;
  border-radius: .5rem;
  text-align: center;
  padding:3rem 2rem;
  outline-offset: -1rem;
  outline: var(--outline);
  box-shadow: var(--box-shadow);
  transition: .2s linear;
}
.review .review-slider .box:hover{
  outline:var(--outline-hover);
  outline-offset: 0rem;
}
.review .review-slider .box img{
  height:10rem;
  width:10rem;
  border-radius: 50%;
}
.review .review-slider .box p{
  padding:1rem 0;
  line-height: 1.8;
  color:var(--light-color);
  font-size: 1.5rem;
}
.review .review-slider .box h3{
  padding-bottom: .5rem;
  color:var(--black);
  font-size: 2.2rem;
}
.review .review-slider .box .stars i{
  color:var(--orange);
  font-size: 1.7rem;
}
</style>