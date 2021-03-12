<template>
<div>
	<section class="hero">
        <div class="container">
		   	<div class="text-wrapper">
				<h1 class="title">{{title}} </h1>
				   	<p class="description">
				        Berbicara inovasi memang tak akan ada habis-habisnya untuk dibahas, dunia ini haus inovasi. Mungkin kalangan terpelajar stovia dulu akan terperanjat dari kursi rotannya yang nyaman, melihat gencar nya inovasi hari ini dalam masa dunia informasi. Yang dahulu kebebasan mereka anggap surga .... kini ? Entahlah
				    </p>
				   <a href="https://pujiermanto.vercel.app/about" class="cta">Innovation Sucks</a>
			</div>
		
			<Artwork/>


		</div>
	</section>
	
	<h1 class="underline mb-5 mt-5"></h1>

	<section class="project">
		<ProjectList title="Product List ... "/>
    </section>

    <Parallax/>	

</div>
</template>

<script>
  import Artwork from './takeHome/Artwork.vue'
  import ProjectList from './takeHome/ProjectList.vue'
  import Parallax from './takeHome/Parallax.vue'

  export default {
    name: 'HomePage',
    props: ['title'],
    components: {
    	Artwork,
    	ProjectList,
    	Parallax
    }
  }
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Source+Code+Pro&family=Yellowtail&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poiret+One&display=swap');

.underline:after {
  content: "";
  display: block;
  margin: auto;
  position: relative;
  margin-bottom: 2rem;
  margin-top: 0.8rem;
  width: 100px;
  height: 2px;
  background: #ff634e;
}
.hero{
	margin-top: -5rem;
	padding-top: 87px;
	scroll-snap-align: start;
	width: 100%;
	.container{
		display: inline-flex;
		align-item: center;
		justify-content: safe center;
	}
	.text-wrapper{
		width: 50%;
		text-align: justify;
		margin-left:9rem;
		.title{
			font-family: 'Poiret One', cursive;
			color: #000;
			font-size: 35px;
			margin-top: 25px;
			margin-bottom: 10px;
			font-weight: 900;
		}
		.description{
			font-size:16px;
			line-height: 31px;
			font-family: 'Source Code Pro', monospace;
		}
		.cta{
			display: inline-block;
			padding: 15px 45px;
			margin-top: 10px;
			margin-bottom: 20px;
			background: #000;
			color:#fff;
			font-size: 14px;
			text-decoration: none;
			border-radius: 5px;
			transition: transform .1s;
			&:hover {
				transform: scale(1.1);
			}
		}
	}
	
	@media (max-width: 768px) {
		.text-wrapper{
			width: 40%;
			margin-top: -7rem;
			.title{
				margin-left: -5rem;
			}
			.description {
				font-size: 14px;
				line-height: 21px;
				text-align: justify;
				margin-left: -5rem;
			}
			.cta{
				line-height: 18px;
				font-size:16px;
				margin-top: -.5rem;
				margin-left:-3rem;
				padding: 12px 10px;
				margin-bottom: 3rem;
			}
		}
		.image-wrapper {
			margin-top: -5.5rem;
		}
	}
	@media (max-width: 368px){
		.text-wrapper{
			width: 50%;
			margin-left: 1rem;
			
			.description {
				font-size: 14px;
				line-height: 21px;
			}
			.cta{
				line-height: 18px;
				font-size:16px;
				padding: 15px 10px;
				margin-bottom: 7.5rem;
			}
		}
		.image-wrapper {
			margin-top: 3rem;
		}
	}
}
.project{
	margin-top:3.5rem;
   img {
    width: 100%;
    max-width: 600px;
    height: auto;
    margin-bottom: 32px;
  }
  p {
    margin: 0;
    padding: 0;
    line-height: 1.5em;
  }
}
</style>