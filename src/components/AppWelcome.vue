<template>
  <section class="home" id="home">
    <div class="box">
      <div class="content">
        <p id="texto">
          {{appHomeDescription}}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'HelloWorld',
  computed: {
      ...mapState([
        'appHomeDescription',
      ])
  },
  props: {
    msg: String
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    padding: 0;
  }
  .home .box {
    min-height: 100vh;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: var(--home-background-image) no-repeat;
    background-size: cover !important;
    background-position: center !important;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    padding: 2rem 9%;
  }
  .home .box.second {
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }
  .home .box .content {
    width: 100%;
    text-align: center;
  }
  .home .box .content span {
    font-size: 4rem;
    color: var(--font-color);
  }
  .home .box .content p {
    color: var(--white);
    font-size: 4rem;
    text-transform: uppercase;
    font-weight: bolder;
    text-shadow: -1px -1px 0px var(--black), -1px 1px 0px var(--black),
      1px -1px 0px var(--black), 1px 0px 0px var(--black);
  }
  @media (max-width: 991px) {
    .home .box {
      padding: 2rem;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      background-position: right !important;
    }
    .home .box.second {
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      background-position: left !important;
    }
    .home .box .content {
      text-align: center;
    }
    .home .box .content span {
      font-size: 3rem;
    }
    .home .box .content h3 {
      font-size: 4rem;
    }
  }
  @media (max-width: 768px) {
    .home .box .content p {
      font-size: 2.5rem;
    }
  }
</style>
