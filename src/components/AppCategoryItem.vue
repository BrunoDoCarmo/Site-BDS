<template>
  <div class="box">
    <div class="test">
      <img v-if="item.icon" :src="item.icon" :alt="item.title" />
    </div>
    <h3> {{item.title}} </h3>
    <p> {{item.text}} </p>
    <a :href="`${item.id}`" class="btn">{{ item.button }}</a>
  </div>
</template>
<script>
export default ({
  props: {
    item: Object
  }
})
</script>
<style scoped>
  .box {
    text-align: center;
    padding: 1rem;
  }
  .box .test {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .box .test img {
    height: 10rem;
    width: 10rem;
    margin: 1rem 0;
  }
  .box h3 {
    font-size: 2rem;
    color: var(--font-color-hover);
  }
  .box p {
    font-size: 1.5rem;
    color: var(--font-color);
    padding: 1rem 0;
    line-height: 2;
    text-align: justify;
  }
  .box:hover {
    background: var(--font-color-hover);
    border-radius: 1rem;
    box-shadow: 3px 3px 8px var(--sombra);
  }
  .box:hover .test img {
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
</style>
