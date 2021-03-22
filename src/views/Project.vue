<template>
	<div>
		<slot/>
		<LookUp title="Cek temperatur disini ... "/>
	</div>
</template>

<script>
	import LookUp from '../components/pages/Projects/LookUp'
	export default {
		name: 'Project',
		props: ['title'],
		components: {
			LookUp
		},
		metaInfo: {
			title: 'Project | Primavera'
		}
	}
</script>

<style>
	
</style>