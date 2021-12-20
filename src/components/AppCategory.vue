<template>
  <section class="category">
    <h1 class="heading">{{appCategoryTitle}}</h1>
    <div class="box-container">
        <AppCategoryItem v-for="(appCategoryBox, index) in appCategoryBoxs" :key="index" :item="appCategoryBox" />
    </div>
  </section>
</template>
<script>
import { mapState } from 'vuex'
import AppCategoryItem from '../components/AppCategoryItem.vue'
export default {
  name: 'AppCategory',
  computed: {
    ...mapState([
      'appCategoryTitle',
      'appCategoryBoxs' 
    ])
  },
  components: {
    AppCategoryItem,
  }
}
</script>

<style scoped>
  .category {
    background-color: var(--white);
  }
  .category .box-container {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: (minmax(29rem, 1fr)) [auto-fit];
    grid-template-columns: repeat(auto-fit, minmax(29rem, 1fr));
    gap: 1.5rem;
  }
</style>
