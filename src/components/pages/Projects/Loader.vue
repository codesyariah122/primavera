<template>
	
	<div>
		<img :src="loading">
	</div>

</template>


<script>
	import Loading from './loading.gif'

	export default {
		data(){
			return {
				loading: Loading
			}
		}
	}
</script>

<style>

</style>