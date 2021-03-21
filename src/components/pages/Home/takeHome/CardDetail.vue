<template>
	<div>
		<b-card no-body class="overflow-hidden" style="max-width: 540px;">
			<b-row no-gutters>
				<b-col md="6">
					<b-card-img :src="`https://puji-app.herokuapp.com/images/projects/${details.img_path}`" class="rounded-0"></b-card-img>
					<a :href="`https://wa.me/${details.phone}?text=Hai%20kak%20saya%20tertarik%20dengan%20product%20atau%20jasa%20${details.name}`" class="btn btn-success mt-2 text-white"><b-icon icon="bookmarks" aria-hidden="true"></b-icon>Contact Me</a>
				</b-col>
				<b-col md="6">
					<b-card-body :title="details.name">
						<b-card-text class="text-primary">
							{{details.type}}
						</b-card-text>
						<blockquote class="text-secondary">
							{{details.description}}
						</blockquote>

						<b-card-text>
							{{details.detail}}
						</b-card-text>

						<b-card-text>
							Fitur: <br/>
							<ul v-for="fitur in details.fitur">
								<li>
									{{fitur}}
								</li>
							</ul>
						</b-card-text>
					</b-card-body>
				</b-col>
			</b-row>
		</b-card>
	</div>
</template>

<script>
	export default{
		name: 'CardDetail',
		props: {
			details: Object
		}
	}
</script>