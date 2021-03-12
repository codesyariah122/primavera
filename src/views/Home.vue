<template>
  <div>
    <slot /> 
    <HomePage title="Innovation It's Sucks ..."/>
  </div>
</template>

<script>
	import HomePage from '../components/pages/Home/HomePage.vue'
	export default {
		name: "Home",
		props:['title'],
		components: {
			HomePage
		},
		metaInfo: {
			title: "HomePage | Primavera"
		}
		
	}

</script>
