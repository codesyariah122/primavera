<template>
	<div>

		<div id="lookup">
			<b-container>
				<b-row class="justify-content-center">
					<div class="col-12 mb-5">
						<h5 v-if="show.button"> {{title}} </h5>

						<img v-if="loading" :src="animate" :title="ip" width="250" height="150" class="img-responsive mt-5">
						
						<button v-if="show.button" class="btn btn-primary" @click="getLocation(ip)">Check Temperature</button>

					</div>
				</b-row>

				<b-row>
					<div class="col-md-4 mt-5">
						
						<Weather  v-if="show.weather" :city="result.city"/>

						<b-card v-if="show.card" class="mt-3 mb-5">
							<b-list-group  flush style="font-size:12px;">
								<b-list-group-item><img :src="`https://www.countryflags.io/${result.country_code}/shiny/64.png`" class="img-responsive circle"/>
								</b-list-group-item>
								<b-list-group-item>
									{{result.org}}
								</b-list-group-item>
								<b-list-group-item>
									{{result.ip}}
								</b-list-group-item>
								<b-list-group-item>
									{{result.country_population}}
								</b-list-group-item>
								<b-list-group-item>
									{{result.timezone}} {{result.utc_offset}}
								</b-list-group-item>
								<b-list-group-item>
									{{result.latitude}}
								</b-list-group-item>
								<b-list-group-item>
									{{result.longitude}}
								</b-list-group-item>
							</b-list-group>
						</b-card>
					</div>

					<div class="col-md-4 col-xs-4 col-sm-6 mt-5 mb-5">
						<div v-if="map">
							<div class="embed-responsive embed-responsive-16by9">	
								
								<iframe width="800" height="400" frameborder="0" scrolling="yes" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=107.24544525146484%2C-7.040586689891008%2C107.62859344482422%2C-6.844623671722899&amp;layer=mapnik" style="border: 1px solid black"></iframe><br/><small><a :href="map">View Larger Map</a></small>

								<!-- <Chart style="margin-left: 5rem; margin-top:-.1rem;" :code="result.country_code" :city="result.city" /> -->

							</div>
	                	</div>
					</div>
				</b-row>
<!-- 
				<b-row>
					<div class="col-12 col-xs-12 col-sm-12">
					</div>
				</b-row> -->

			</b-container>
		</div>

	</div>
</template>

<script>
	import loading from './assets/loading.gif'
	import Weather from './complement/Weather.vue'
	import Chart from './complement/Chart.vue'
	

	export default {
		props: {
			title: String
		},
		components: {
			Weather,
			Chart
		},
		data() {
			return {
				animate: loading,
				loading: false,
				show: {
					button: true,
					card: false,
					weather: false
				},
				ip: '',
				result: [],
				map: ''
			}
		},

		created(){
			this.getIp()
		},

		methods: {
			getIp() {
				fetch(`https://api.ipify.org/?format=json`)
				.finally(() => {
					this.loading=true
					this.show.button=false
				})
				.then(res => res.json())
				.then(res => {
					setTimeout(() => {
						this.ip=res.ip
						this.loading=false
						this.show.button=true
					}, 2500)
				})
				.catch(err => console.log(err))
			},

			getLocation(ip){
				fetch(`https://ipapi.co/${ip}/json/`)
				.finally(() => {
					setTimeout(() => {
						this.loading=true
						this.show.button=false
					}, 500)
				})
				.then(res => res.json())
				.then(res => {
					// console.log(res)
					setTimeout(() => {
						this.loading=false
						this.show.button=false
						this.show.card=true
						this.show.weather=true
						this.result=res
						this.city=res.city
						// this.map=`https://maps.google.com/maps?q=${this.result.city}&t=&z=13&ie=UTF8&iwloc=&output=embed`
						this.map=`https://www.openstreetmap.org/#map=12/${this.result.latitude}/${this.result.longitude}`
					}, 2500)
				})
				.catch(err => console.log(err))
			}
		}
	}
</script>


<style lang="scss" scoped>
	#lookup{
		h5{
			margin-top: 5rem;
		}

		@media only screen and (max-width: 600px) {
			margin-left: 3rem;
			h5{
				margin-top: 7rem;
			}
			
		} 
	}
</style>