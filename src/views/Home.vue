<template>
	<div>
		<HomePage title="Puji Ermanto HomePage"/>

	</div>
</template>

<script>
	// import axios from 'axios'
	import HomePage from '../components/HomePage.vue'


	export default {
		name: "Home",
		props:['title'],

		data() {
			return {
				project: []
			}
		},
		created() {
			this.getData()
		},
		methods: {
			async getData(){
				await fetch('https://puji-app.herokuapp.com/api/data/project/show')
				.then(res => res.json())
				.then(response => {
					this.project=response.data
					console.log(response)
				})
				.catch(err => console.log('fetching data error : ', err.message))
			}
		},
		components: {
			HomePage
		}, 
	}
</script>