<template>
    <!-- header section start  -->
    <header class="header">
      <a href="#" class="logo">
        <!-- <i class="fas fa-hiking"></i> travel. -->
        <img :src="appLogoImg" alt="Logo" id="img-logo" />
      </a>
      <nav class="navbar">
        <ul class="nav-menu">
          <li>
            <a :href="`#${link.id}`" v-for="(link, index) in appNavLinks" :key="index">{{ link.text }}</a>
            <div id="nav-close" class="fas fa-times"></div>
            <div class="icons-social">
              <a :href="`${link.id}`" v-for="(link, index) in appNavSocialNetwork" :key="index" target="_blank"><i :class="link.icon"></i>{{ link.text }}</a>
              <!-- <a href="#"><i class="fab fa-whatsapp"></i></a>
              <a href="#"><i class="fab fa-facebook"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-telegram"></i></a> -->
            </div>
          </li>
        </ul>
      </nav>
      <div class="icons">
        <div id="menu-btn" class="fas fa-bars"></div>
        <div id="search-btn" class="fas fa-search"></div>
      </div>
    </header>
    <!-- header section end -->
    <!-- search form start -->
    <div class="search-form">
      <div id="close-search" class="fas fa-times"></div>
      <form action="">
        <input type="search" name="" placeholder="search here..." id="search-box"/>
        <label for="search-box" class="fas fa-search"></label>
      </form>
    </div>
    <!-- search form end -->

</template>
<script>
import {mapState} from 'vuex'
export default {
  name: "AppTopNavigator",
  computed: {
    ...mapState([
      'appLogoImg',
      'appNavLinks',
      'router',
      'appNavSocialNetwork',
    ])
  },
  methods: {
    eventHandler() {
      let navbar = document.querySelector('.header .navbar')
      document.querySelector('#menu-btn').onclick = () => {
        navbar.classList.add('active')
      }
      document.querySelector('#nav-close').onclick = () => {
        navbar.classList.remove('active')
      }
      let searchForm = document.querySelector('.search-form')
      document.querySelector('#search-btn').onclick = () => {
        searchForm.classList.add('active')
      }
      document.querySelector('#close-search').onclick = () => {
        searchForm.classList.remove('active')
      }
      window.onscroll = () => {
        navbar.classList.remove('active')
        if (window.scrollY > 0) {
          document.querySelector('.header').classList.add('active')
        } else {
          document.querySelector('.header').classList.remove('active')
        }
      }
      window.onload = () => {
        if (window.scrollY > 0) {
          document.querySelector('.header').classList.add('active')
        } else {
          document.querySelector('.header').classList.remove('active')
        }
      }
    },
    generateTopBar(add) {
      if (add) {
        window.addEventListener('scroll',this.eventHandler)
      } else {
        window.removeEventListener('scroll',this.eventHandler)
      }
    }
  },
  mounted(){
    this.generateTopBar(true)

  },
  unmounted(){
    this.generateTopBar(false)
  }
}

</script>
<style>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 2rem 9%;
  z-index: 1000;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.header.active {
  background: var(--font-color-hover);
  -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
}
.header .logo {
  margin-right: auto;
  font-size: 2.5rem;
  color: var(--font-color);
  font-weight: bolder;
}
.header .logo img {
  width: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header .navbar .nav-menu li{
  list-style: none;
}
.header .navbar .nav-menu a {
  margin-left: 2rem;
  font-size: 1.7rem;
  color: var(--white);
  left: 0;
}
.header .navbar .nav-menu .icons-social {
  display: none;
}
.header .navbar .nav-menu #nav-close {
  font-size: 5rem;
  cursor: pointer;
  color: var(--font-color);
  display: none;
}
.header .icons a,
.header .icons div {
  font-size: 2.5rem;
  margin-left: 2rem;
  cursor: pointer;
  color: var(--white);
}
.header .icons a:hover,
.header .icons div:hover {
  color: var(--font-color-hover);
}
header.active .icons a:hover,
.header.active .icons div:hover {
  color: var(--black);
}
.header #menu-btn {
  display: none;
}
.search-form {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  z-index: 10000;
  -webkit-transform: translateY(-110%);
  transform: translateY(-110%);
}
.search-form.active {
  -webkit-transform: translateY(0%);
  transform: translateY(0%);
}
.search-form #close-search {
  position: absolute;
  top: 1.5rem;
  right: 2.5rem;
  cursor: pointer;
  color: #fff;
  font-size: 6rem;
}
.search-form #close-search:hover {
  color: var(--font-color-hover);
}
.search-form form {
  width: 70rem;
  margin: 0 2rem;
  padding-bottom: 2rem;
  border-bottom: 0.2rem solid var(--white);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.search-form form input {
  width: 100%;
  font-size: 2rem;
  color: var(--white);
  text-transform: none;
  background: none;
  padding-right: 2rem;
}
.search-form form input::-webkit-input-placeholder {
  color: #aaa;
}
.search-form form input:-ms-input-placeholder {
  color: #aaa;
}
.search-form form input::-ms-input-placeholder {
  color: #aaa;
}
.search-form form input::-placeholder {
  color: #aaa;
}
.search-form form label {
  font-size: 3rem;
  cursor: pointer;
  color: var(--white);
}
.search-form form label:hover {
  color: var(--font-color-hover);
}
/* media query */
@media (max-width: 1200px) {
  .header {
    padding: 2rem;
  }

  
.header {
  display: flex;
  align-items: center;
  justify-content: center;
}
.header .navbar {
  display: flex;
  align-items: center;
  justify-content: center;
}
.header .navbar a {
  margin-left: 2rem;
  font-size: 1.7rem;
}
.header .navbar .nav-menu {
  font-size: 1.4rem;
}
.header .navbar .nav-menu a:link {
  text-decoration: none;
}
.header .navbar .nav-menu a:visited {
  text-decoration: none;
}
.header .navbar .nav-menu li {
  display: inline;
  padding-left: 0;
}
.header .navbar .nav-menu:focus { 
  pointer-events:none; 
}
.header .navbar .nav-menu li a .active ,
.header .navbar .nav-menu li a {
  text-decoration: none;
  position: relative;
  transition: all 0.6s;
}
.header .navbar .nav-menu li a .active:after ,
.header .navbar .nav-menu li a:after {
  content: '';
  width: 0;
  height: 0.2rem;
  position: absolute;
  bottom: -5px;
  left: 50%;
  background: var(--white);
  transition: all 0.5s;
}
.header .navbar .nav-menu li a:hover:after {
  width: 100%;
  left: 0;
  background:  var(--white);
} 
.header .navbar .nav-menu li a .active {
  width: 100%;
  background:  var(--white);
} 
}
@media (max-width: 768px) {
  .header #menu-btn {
    display: inline-block;
  }
  .header .navbar {
    position: fixed;
    top: 0;
    left: -110%;
    background: var(--white);
    z-index: 10000;
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-flow: column;
    flex-flow: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .header .navbar.active {
    left: 0;
    -webkit-box-shadow: 0 0 0 100vw rgba(0, 0, 0, 0.8);
    box-shadow: 0 0 0 100vw rgba(0, 0, 0, 0.8);
  }
  .header .navbar a {
    margin: 1rem 0;
    font-size: 3rem;
  }
  .header .navbar .icons-social {
    position: absolute;
    bottom: 1rem;
    display: flex;
  }
  .header .navbar .icons-social a {
    margin-left: 1.5rem;
    font-size: 5rem;
  }
  .header .navbar.active a {
    color: var(--black);
  }
  .header .navbar #nav-close {
    display: block;
    position: absolute;
    top: 1rem;
    right: 2rem;
  }
  .home .box .content p {
    font-size: 2.5rem;
  }
}
</style>