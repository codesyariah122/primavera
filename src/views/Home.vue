<template>
	<div>
		<HomePage title="Puji Ermanto HomePage"/>

	</div>
</template>

<script>
	// import axios from 'axios'
	import HomePage from '../components/pages/HomePage.vue'


	export default {
		name: "Home",
		props:['title'],

		metaInfo: {
			title: 'HomePage | Primavera'
		},

		components: {
			HomePage
		}, 
	}
</script>