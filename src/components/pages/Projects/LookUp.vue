<template>
	<div>

		<div id="lookup">
			<b-container>
				<b-row class="justify-content-center">
					<div class="col-12 mb-5">
						<h5> {{title}} </h5>

						<img v-if="loading" :src="animate" :title="ip">
						
						<button v-else class="btn btn-primary" @click="getLocation(ip)">Check Location</button>
					</div>
				</b-row>

				<b-row>
					<div class="col-md-4">
						<b-card v-if="result" class="mt-3">
							<b-list-group flush style="font-size:12px;">
								<b-list-group-item>
									{{result.org}}
								</b-list-group-item>
								<b-list-group-item>
									{{result.ip}}
								</b-list-group-item>
								<b-list-group-item>
									{{result.country_name}}
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

					<div class="col-md-4 col-xs-4 col-sm-6">	
						<div class="mt-3" v-if="map">
	                        <div class="mapouter">
	                            <div class="gmap_canvas">
	                                <iframe width="600" height="300" id="gmap_canvas" :src="map" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
	                                </iframe>
	                            </div>
	                        </div>
                    	</div>
					</div>

				</b-row>
			</b-container>
		</div>

	</div>
</template>

<script>
	import loading from './assets/loading.gif'

	export default {
		props: {
			title: String
		},
		data() {
			return {
				animate: loading,
				loading: false,
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
					setTimeout(() => {
						this.loading=true
					}, 500)
				})
				.then(res => res.json())
				.then(res => {
					setTimeout(() => {
						this.ip=res.ip
						this.loading=false
					}, 7500)
				})
				.catch(err => console.log(err))
			},

			getLocation(ip){
				fetch(`https://ipapi.co/${ip}/json/`)
				.finally(() => {
					setTimeout(() => {
						this.loading=true
					}, 500)
				})
				.then(res => res.json())
				.then(res => {
					console.log(res)
					setTimeout(() => {
						this.loading=false
						this.result=res
						this.map=`https://maps.google.com/maps?q=${this.result.city}&t=&z=13&ie=UTF8&iwloc=&output=embed`
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
		.gmap_canvas {
			overflow:hidden;
			background:none!important;
			height:300px;width:600px;
		}
		.mapouter{
			position:relative;
			text-align:right;
			height:300px;
			width:600px;
		}

		@media only screen and (max-width: 600px) {
			margin-left: 3rem;
			h5{
				margin-top: 7rem;
			}
			.gmap_canvas{
				height:200px;
				width: 270px;
			}
			.mapouter{
				height: 200px;
				width: 270px;
			}
		} 
	}
</style>