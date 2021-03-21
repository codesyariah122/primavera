<template>
	<div>
		<b-card no-body class="overflow-hidden" style="max-width: 540px;">
			<b-row no-gutters>
				<b-col md="6">
				<b-card-img :src="details.Poster" :alt="details.Title" class="rounded-0"></b-card-img>
					
				</b-col>
					<b-col md="6">
					  	<b-card-body :title="`${details.Title} | ${details.Year}`">
					    <b-card-text>
					        <ul>
					          	<li>Director : <b>{{details.Director}}</b></li>
					          	<li>Writer : <b>{{details.Writer}}</b></li>
					          	<li>Actors : <b>{{details.Actors}}</b></li>
					          	<li>Genre : <b>{{details.Genre}}</b></li>
					          	<li>Awards : <b>{{details.Awards}}</b></li>
					          	<li>Country : <b>{{details.Country}}</b></li>
					          	<li>Production : <b> {{details.Production}}</b></li>
					          	<li>Released : <b>{{details.Released}}</b></li>
					          		<br/>
					          	<li>Plot : <b> {{details.Plot}}</b></li>
					        </ul>
					    </b-card-text>
					</b-card-body>
				</b-col>
			</b-row>
		</b-card>
	</div>
</template>


<script>
	export default {
		name: 'CardDetails',
		props: {
			details: Object
		}
	}
</script>