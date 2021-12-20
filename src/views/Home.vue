<template>
  <div class="home">
    <AppTopNavigator />

    <AppWelcome />

    <AppCategory />

    <AppServices />

    <AppCarousel />

    <AppContact />

    <AppMaps />

    <AppFooter />

    <AppFloatButton />
  </div>
</template>

<script>
import AppTopNavigator from "../components/AppTopNavigator.vue";
import AppWelcome from '../components/AppWelcome.vue'
import AppCategory from '../components/AppCategory.vue'
import AppServices from '../components/AppServices.vue'
import AppCarousel from '../components/AppCarousel.vue'
import AppContact from '../components/AppContact.vue'
import AppMaps from '../components/AppMaps.vue'
import AppFooter from '../components/AppFooter.vue'
import AppFloatButton from '../components/AppFloatButton.vue'
import '../App.css';
export default {
  name: 'Home',
  components: {
    AppTopNavigator,
    AppWelcome,
    AppCategory,
    AppServices,
    AppCarousel,
    AppContact,
    AppMaps,
    AppFooter,
    AppFloatButton
  }
};
</script>