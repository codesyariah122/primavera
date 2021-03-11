<template>
	<div>
		<HeroContent title="HomePage"/>
		
		<div class="container">

			<ProjectLists title="Project List Here" content="Andai hujanmu berhenti.\n Terbata mengeja puisi. Ada yang hening membeku. \n Roboh di altar sang waktu. \n Hujan ini sebut kamu. \n Pergi di ujung rindu. \n Lara percikan sendu. \n Datangi sela-sela ragu"/>

		</div>

	</div>
</template>

<script>
	import axios from 'axios'
	import ProjectLists from '../molecules/ProjectLists.vue'
	import HeroContent from '../molecules/HeroContent'

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