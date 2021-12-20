<template>
  <section class="about" id="about">
    <h1 class="heading"></h1>
    <div class="box-container">
      <div class="box">
        <div class="image">
          <img src="../assets/image/about-img.jpg" alt="" />
        </div>
        <div class="content">
          <h3>memorable outdoor experiences</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
            voluptates corrupti natus necessitatibus beatae voluptatibus, deserunt
            quo soluta minima libero laborum, corporis error esse vitae placeat
            blanditiis reiciendis vel? Minima.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            dicta doloremque placeat porro, ipsam quia at beatae atque odit iste?
          </p>
          <a href="#" class="btn">read more</a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
</script>
<style scoped>
.about {
  background: #eee;
}
.about .box-container .box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  gap: 2rem;
}
.about .image {
  -webkit-box-flex: 1;
      -ms-flex: 1 1 42rem;
          flex: 1 1 42rem;
  padding-right: 5rem;
  padding-bottom: 5rem;
}
.about .image img {
  width: 100%;
  -webkit-box-shadow: 4rem 4rem 0 rgba(0, 0, 0, 0.1);
          box-shadow: 4rem 4rem 0 rgba(0, 0, 0, 0.1);
}
.about .content {
  -webkit-box-flex: 1;
      -ms-flex: 1 1 42rem;
          flex: 1 1 42rem;
}
.about .content h3 {
  font-size: 3rem;
  color: #219150;
}
.about .content p {
  font-size: 1.5rem;
  color: #10221b;
  padding: 1rem 0;
  line-height: 2;
}
</style>