<template>
	<HeroContent title="AboutPage"/>
</template>

<script>
	import HeroContent from '../molecules/HeroContent'
	export default {
		name: 'About',
		props: ['title']
		components:{
			HeroContent
		}
	}
</script>

<style></style>