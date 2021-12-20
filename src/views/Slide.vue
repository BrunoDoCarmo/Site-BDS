<template>
  <div class="sobre">
    <AppTopNavigatorDescription />
    
    <AppImgPages />
    
    <Slide />
    
    <AppFooter />
  </div>
</template>
<script>
import AppTopNavigatorDescription from "../components/AppTopNavigatorDescription.vue";
import AppImgPages from '../components/AppImgPages.vue'
import Slide from '../components/Slide.vue'
import AppFooter from '../components/AppFooter.vue'
export default {
  name: 'Sobre',
  components: {
    AppTopNavigatorDescription,
    AppImgPages,
    Slide,
    AppFooter,
  }
};
</script>