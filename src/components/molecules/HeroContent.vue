<template>
	 <!-- jumbotron -->
    <div class="jumbotron jumbotron-fluid mb-5">
	    <div class="container">
	        <div class="row">
	            <div class="col-md-5">
	                <h1 class="display-4">
	                    {{title}}
	                </h1>
	            </div>
	        </div>
	    </div>
    </div>
</template>

<script>
	export default{
		name: 'HeroContent',
		props: [
			'title', 
			'content'
		],
	}
</script>

<style scoped>
@font-face {
  font-family: "SpringSakura";
  font-style: normal;
  font-weight: normal;
  src: local("SpringSakura"), url("/fonts/SpringSakura-3z1m8.otf") format("otf");
}
@font-face {
  font-family: "Reey Regular";
  font-style: normal;
  font-weight: normal;
  src: local("Reey Regular"), url("/fonts/Reey-Regular.woff") format("woff");
}
@font-face {
  font-family: "Lemon/Milk Regular";
  font-style: normal;
  font-weight: normal;
  src: local("https://github.com/codesyariah122/kerjaan-syoobe/blob/main/for_page/fonts/Lemon__Milk%20400.otf") format("otf");
}
/* Utility */
.tombol {
  text-transform: uppercase;
  border-radius: 40px !important;
  font-family: "Lemon/Milk Regular";
  font-weight: normal;
  font-size: 42px;
}
/* jumbotron */
.jumbotron {
   background-size: cover;
  height: 540px; 
  background-image: url('~@/assets/images/home/parallax2.jpg');
  text-align: center;
  position: relative;
  background-color: #17234E;
  margin-top: 0rem;
  margin-bottom: 0;
  min-height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  -webkit-background-size: cover;
  background-size: cover;
  position: relative;
}

.jumbotron .container {
  z-index: 1;
  position: relative;
}

.jumbotron::after {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
  position: absolute;
  bottom: 0;
}

.jumbotron .display-4 {
  color: white;
  margin-top: 150px;
  font-weight: 200;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  margin-bottom: 30px;
  font-family: "Poppins", sans-serif;
}

.jumbotron .display-4 span {
  font-weight: 500;
  color: tomato;
  font-family: "Reey Regular";
}

@media (min-width: 992px) {
/* jumbotron */
  .jumbotron {
    margin-top: -75px;
    height: 640px;
  }

  .jumbotron .display-4 {
    text-transform: capitalize;
    font-family: "Poppins", sans-serif;
  }
}
</style>