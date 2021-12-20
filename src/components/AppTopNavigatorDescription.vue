<template>
    <!-- header section start  -->
    <header class="headerDescription">
      <a href="#" class="logo">
        <!-- <i class="fas fa-hiking"></i> travel. -->
        <img :src="appLogoImg" alt="Logo" id="img-logo" />
      </a>
      <nav class="navbar">
        <ul class="nav-menu">
          <li>
            <router-link class="link" v-for="(link, index) in router" :key="index" :to="{ name: link.name }">{{ link.text }} </router-link>
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
      'router',
      'appNavSocialNetwork',
    ])
  }
}
</script>
<style>
.headerDescription {
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
  background: var(--font-color-hover);
  -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
}
.headerDescription .logo {
  margin-right: auto;
  font-size: 2.5rem;
  color: var(--font-color);
  font-weight: bolder;
}
.headerDescription .logo img {
  width: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.headerDescription .navbar .nav-menu li{
  list-style: none;
}
.headerDescription .navbar .nav-menu a {
  margin-left: 2rem;
  font-size: 1.7rem;
  color: var(--white);
  left: 0;
}
.headerDescription .navbar .nav-menu .icons-social {
  display: none;
}
.headerDescription .navbar .nav-menu #nav-close {
  font-size: 5rem;
  cursor: pointer;
  color: var(--font-color);
  display: none;
}
.headerDescription .icons a,
.headerDescription .icons div {
  font-size: 2.5rem;
  margin-left: 2rem;
  cursor: pointer;
  color: var(--white);
}
.headerDescription .icons a:hover,
.headerDescription .icons div:hover {
  color: var(--font-color-hover);
}
header.active .icons a:hover,
.headerDescription.active .icons div:hover {
  color: var(--black);
}
.headerDescription #menu-btn {
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
  .headerDescription {
    padding: 2rem;
  }

  
.headerDescription {
  display: flex;
  align-items: center;
  justify-content: center;
}
.headerDescription .navbar {
  display: flex;
  align-items: center;
  justify-content: center;
}
.headerDescription .navbar a {
  margin-left: 2rem;
  font-size: 1.7rem;
}
.headerDescription .navbar .nav-menu {
  font-size: 1.4rem;
}
.headerDescription .navbar .nav-menu a:link {
  text-decoration: none;
}
.headerDescription .navbar .nav-menu a:visited {
  text-decoration: none;
}
.headerDescription .navbar .nav-menu li {
  display: inline;
  padding-left: 0;
}
.headerDescription .navbar .nav-menu:focus { 
  pointer-events:none; 
}
.headerDescription .navbar .nav-menu li a .active ,
.headerDescription .navbar .nav-menu li a {
  text-decoration: none;
  position: relative;
  transition: all 0.6s;
}
.headerDescription .navbar .nav-menu li a .active:after ,
.headerDescription .navbar .nav-menu li a:after {
  content: '';
  width: 0;
  height: 0.2rem;
  position: absolute;
  bottom: -5px;
  left: 50%;
  background: var(--white);
  transition: all 0.5s;
}
.headerDescription .navbar .nav-menu li a:hover:after {
  width: 100%;
  left: 0;
  background:  var(--white);
} 
.headerDescription .navbar .nav-menu li a .active {
  width: 100%;
  background:  var(--white);
} 
}
@media (max-width: 768px) {
  .headerDescription #menu-btn {
    display: inline-block;
  }
  .headerDescription .navbar {
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
  .headerDescription .navbar.active {
    left: 0;
    -webkit-box-shadow: 0 0 0 100vw rgba(0, 0, 0, 0.8);
    box-shadow: 0 0 0 100vw rgba(0, 0, 0, 0.8);
  }
  .headerDescription .navbar a {
    margin: 1rem 0;
    font-size: 3rem;
  }
  .headerDescription .navbar .icons-social {
    position: absolute;
    bottom: 1rem;
    display: flex;
  }
  .headerDescription .navbar .icons-social a {
    margin-left: 1.5rem;
    font-size: 5rem;
  }
  .headerDescription .navbar.active a {
    color: var(--black);
  }
  .headerDescription .navbar #nav-close {
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