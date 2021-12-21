<template>
    <h3> {{item.title}} </h3>
</template>
<script>
export default ({
  props: {
    item: Object
  }
})
</script>
<style scoped>
  h3{
    color:var(--white);
    font-size: 8rem;
    padding:1rem 0;
    line-height: 1.8;
    text-shadow: 5px 3px 5px var(--font-color-hover);
  }
</style>
