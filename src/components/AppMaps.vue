<template>
  <section class="maps">
    <iframe :src="appMapsAddress" allowfullscreen="" loading="lazy"></iframe>
  </section>
</template>
<script lang="ts">
import { mapState } from 'vuex'

export default ({
  name: 'AppMaps',
  computed: {
    ...mapState(['appMapsAddress'])
  }
})
</script>
<style scoped>
  .maps {
    margin: 0;
    padding: 0;
  }
  .maps,
  iframe {
    height: 38rem;
  }
  .maps iframe {
    position: relative;
    width: 100%;
  }
</style>
