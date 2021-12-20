<template>
  <div class="box">
    <img v-if="item.icon" :src="item.icon" :alt="item.title" />
    <h3> {{item.title}} </h3>
    <p> {{item.text}} </p>
    <a :href="`${item.id}`" class="btn">{{ item.button }}</a>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default ({
  name: 'AppServicesItem',
  computed: {
    ...mapState([
      'appServicesButton'
    ])
  },
  props: {
    item: Object
  }
})
</script>
<style scoped>
  .box {
    text-align: center;
    padding: 2rem;
    border: 0.2rem solid var(--black);
    border-radius: 1rem;
    background: #fff;
  }
  .box:hover {
    background: var(--font-color-hover);
    border-radius: 1rem;
    box-shadow: 3px 3px 8px var(--sombra);
  }
  .box:hover img {
    -webkit-filter: invert(1);
            filter: invert(1);
    transform: rotateZ(360deg);
    transition: 1.5s;
  }
  .box:hover h3,
  .box:hover p {
    color: var(--white);
  }
  .box:hover .btn {
    background: var(--white);
    border-color: var(--black);
    color: var(--black);
  }
  .box:hover .btn:hover {
    background: var(--font-color-hover);
    border-color: var(--white);
    color: var(--white);
  }
  .box img {
    height: 10rem;
    margin-bottom: 1rem;
    transition: 1.5s;
  }
  .box h3 {
    font-size: 2rem;
  }
  .box p {
    font-size: 1.5rem;
    padding: 1rem 0;
    line-height: 2;
    text-align: justify;
  }
  .box .btn {
    border-color: var(--black);
    color: var(--black);
  }
</style>
