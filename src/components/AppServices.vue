<template>
  <section class="services" id="services">
      <h1 class="heading">{{ appServicesTitle }}</h1>
      <div class="box-container">
        <AppServicesItem v-for="(appServicesBox, index) in appServicesBoxs" :key="index" :item="appServicesBox" />
      </div>
    </section>
</template>
<script>
import { mapState } from 'vuex'
import AppServicesItem from '../components/AppServicesItem.vue'
export default {
  name: 'AppServices',
  computed: {
    ...mapState([
      'appServicesTitle',
      'appServicesBoxs'
    ])
  },
  components: {
    AppServicesItem,
  }
}
</script>
<style scoped>
.services {
  background-color: var(--grey-white);
  box-shadow: 3px 3px 8px var(--sombra);
  border-radius: 1rem;
}
.services .box-container {
  margin-top: 3rem;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (minmax(31rem, 1fr))[auto-fit];
      grid-template-columns: repeat(auto-fit, minmax(31rem, 1fr));
  gap: 1.5rem;
}
</style>