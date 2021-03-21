<template>
	<div>
		<slot/>
		<MovieProject title="Cari Film Apa Gan ... "/>
	</div>
</template>

<script>
	import MovieProject from '../components/pages/Projects/MovieProject'
	export default {
		name: 'Project',
		props: ['title'],
		components: {
			MovieProject
		},
		metaInfo: {
			title: 'MovieSearch | Primavera'
		}
	}
</script>

<style>
	
</style>