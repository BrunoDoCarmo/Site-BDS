<template>
  <section class="home" id="home">
    <div class="content">
      <h3>PDV WEB</h3>
      <a href="#about" class="arrow"><i class="fas fa-arrow-down"></i></a>
    </div>
  </section>
</template>
<script>
</script>
<style scoped>
  .home{
    min-height: 100vh;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: var(--background-description) no-repeat;
    background-size: cover !important;
    background-position: center !important;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    padding: 2rem 9%;
  }
  .home .content{
    text-align: center;
    width: 100%;
  }
  .home .content h3{
    color:var(--white);
    font-size: 8rem;
    padding:1rem 0;
    line-height: 1.8;
    text-shadow: 5px 3px 5px var(--font-color-hover);
  }
  .home .content p{
    color: var(--white);
    font-size: 1.7rem;
  }
  .home .content .arrow:hover,
  .home .content .arrow i:hover {
    border-color: var(--menu-background-color);
    color: var(--menu-background-color);
  }
  .home .content .arrow {
    cursor:default;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    bottom: 2rem;
    position: absolute;
    width: 30px;
    height: 70px;
    border-radius: 1.5rem;
    border: .2rem solid var(--font-color-hover);
    left: 49%;
  }
  .home .content .arrow i {
    margin-top: -35px;
    margin-right: 1.2px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--font-color-hover);
    animation: go-back 0.8s infinite alternate;
  }
  @keyframes go-back {
    from {
      transform: translateY(35px);
    }
    to {
      transform: translateY(0);
    }
  }
</style>