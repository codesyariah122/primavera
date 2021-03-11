<template>
	<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">{{title}}</h1>
    <p class="lead">{{content}}</p>
  </div>
</div>
</template>

<script>
	export default{
		name: 'HeroContent',
		props: [
			'title', 
			'content'
		],
	}
</script>

<style></style>