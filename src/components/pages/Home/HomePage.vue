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

	<section class="project">
		<ProjectList title="Product List ... "/>
    </section>

</div>
</template>

<script>
  import Artwork from './takeHome/Artwork.vue'
  import ProjectList from './takeHome/ProjectList.vue'

  export default {
    name: 'HomePage',
    props: ['title'],
    components: {
    	Artwork,
    	ProjectList
    }
  }
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Source+Code+Pro&family=Yellowtail&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poiret+One&display=swap');


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
		margin-left:7rem;
		.title{
			font-family: 'Poiret One', cursive;
			color: #000;
			font-size: 55px;
			margin-top: 25px;
			margin-bottom: 10px;
		}

		.description{
			font-size:18px;
			line-height: 40px;
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

			.description {
				font-size: 14px;
				line-height: 21px;
			}

			.cta{
				line-height: 18px;
				font-size:16px;
				margin-top: -.5rem;
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
	margin-top:13rem;
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