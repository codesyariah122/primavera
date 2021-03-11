<template>
	<div>
		<AboutPage/>
	</div>
</template>

<script>
	import AboutPage from '../components/pages/AboutPage.vue'
	export default {
		name: "About",
		metaInfo: {
			title: 'AboutPage | Primavera'
		},
		components: {
			AboutPage
		}
	}
</script>