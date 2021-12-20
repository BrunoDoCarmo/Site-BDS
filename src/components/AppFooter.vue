<template>
    <footer class="footer">
      <div class="box-container">
        <div class="box">
          <img :src="appLogoImg" alt="Logo Footer">
          <p>{{ appFooterDescription }}</p>
        </div>
        <div class="box">
          <h3>{{ appFooterTitleContact }}</h3>
          <a :href="`${link.id}`" v-for="(link, index) in appFooterContact" :key="index"><i :class="link.icon"></i>{{ link.text }}</a>
        </div>
        <div class="box">
          <h3>{{ appFooterTitleSocialNetwork }}</h3>
          <a :href="`${link.id}`" v-for="(link, index) in appSocialNetwork" :key="index"  target="_blank"><i :class="link.icon"></i>{{ link.text }}</a>
        </div>
      </div>
      <div class="credit">
        <h3>{{ appFooterCredit }}</h3>
      </div>
    </footer>
</template>
<script>
import { mapState } from 'vuex'
export default ({
  name: 'AppFooter',
  computed: {
    ...mapState([
      'appLogoImg',
      'appFooterDescription',
      'appFooterTitleContact',
      'appFooterContact',
      'appFooterTitleSocialNetwork',
      'appSocialNetwork',
      'appFooterCredit'
      ])
  }
})
</script>

<style scoped>
.footer {
  background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(0, 0, 0, 0.7)),
      to(rgba(0, 0, 0, 0.7))
    ),
    url(../assets/Img/Home/Tecnology-Computer.jpg) no-repeat;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(../assets/Img/Home/Tecnology-Computer.jpg) no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
.footer .box-container {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (minmax(36rem, 1fr)) [auto-fit];
  grid-template-columns: repeat(auto-fit, minmax(36rem, 1fr));
  gap: 1.5rem;
}
.footer .box-container .box {
  width: 95%;
}
.footer .box-container .box h3 {
  font-size: 2rem;
  padding: 1.5rem 0;
  color: var(--white);
}
.footer .box-container .box img {
  display: block;
  left: 0;
  top: 0;
  padding: 1.5rem 0;
  width: 50%;
  height: auto;
}
.footer .box-container .box p {
  display: block;
  font-size: 1.4rem;
  color: var(--white);
  text-align: justify;
}
.footer .box-container .box a {
  display: block;
  font-size: 1.4rem;
  color: var(--white);
  padding: 1rem 0;
}
.footer .box-container .box a i {
  color: var(--font-color-hover);
  padding-right: 0.5rem;
  margin-right: 0.5rem;
}
.footer .box-container .box a:hover {
  color: var(--font-color-hover);
}
.footer .box-container .box a:hover i {
  padding-right: 2rem;
}
.footer .credit {
  text-align: center;
  margin-top: 2.5rem;
  padding: 1rem;
  padding-top: 2.5rem;
  font-size: 1.5rem;
  color: var(--white);
}
</style>