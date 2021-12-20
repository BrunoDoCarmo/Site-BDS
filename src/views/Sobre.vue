<template>
  <div class="sobre">
    <AppTopNavigatorDescription />
    
    <AppImgPages />
    
    <AppAbout />
    
    <AppFooter />
  </div>
</template>
<script>
import AppTopNavigatorDescription from "../components/AppTopNavigatorDescription.vue";
import AppImgPages from '../components/AppImgPages.vue'
import AppAbout from '../components/AppAbout.vue'
import AppFooter from '../components/AppFooter.vue'
export default {
  name: 'Sobre',
  components: {
    AppTopNavigatorDescription,
    AppImgPages,
    AppAbout,
    AppFooter,
  }
};
</script>