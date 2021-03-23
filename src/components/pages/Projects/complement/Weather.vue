<template>
	<div>
		<div class="row">
			<div class="col-md-4">
				<div v-for="weather in weathers">
					<img width="100" height="100" style="margin-top:-2rem;" :src="`http://openweathermap.org/img/wn/${weather.icon}@4x.png`">
				</div>
			</div>
			<div class="col-md-3">
				<h1 v-if="main" class="text-info">{{main.temp}}&deg;C</h1>
			</div>
		</div>
	</div>
</template>


<script>
	export default {
		props: {
			city: String
		},

		data() {
			return {
				main: {
					temp: ''
				},
				show: false,
				weathers: [],
				apiKey: '172033330b26104e83475e409303f1d7'
			}
		},

		created() {
			this.getWeather()
		},

		methods: {
			getWeather(){
				fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=imperial&appid=${this.apiKey}`)
				.then(res => res.json())
				.then(res => {
					console.log(res)
					this.show = true
					this.main.temp = this.getCelcius(res.main.temp)
					this.weathers = res.weather
				})
			},
			getCelcius(num){
				num = parseFloat(num)
				return Math.ceil((num - 32) / 1.8)
			}
		}
	}
</script>