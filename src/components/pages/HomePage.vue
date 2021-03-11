<template>
	<div>
		<!-- <HeroContent title="Second Landing ..."/> -->
		
		<div class="container">

			<ProjectLists title="Project List Here"/>

		</div>

	</div>
</template>

<script>
	import axios from 'axios'
	import ProjectLists from '../molecules/ProjectLists.vue'
	// import HeroContent from '../molecules/HeroContent'

	export default {
		name: 'HomePage',
		props: [
			'title', 
			'content'
		],
		components:{
			ProjectLists,
			HeroContent
		},
		
	}
</script>

<style scoped>
.card-text{
	text-align: justify;
}
</style>