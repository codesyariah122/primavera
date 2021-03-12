<template>
	<div>
	 <b-modal id="modal-1" title="BootstrapVue">
	    <p class="my-4">{{id}}</p>
	  </b-modal>
	</div>
</template>


<script>
	export default {
		props: ['id']
	}
</script>