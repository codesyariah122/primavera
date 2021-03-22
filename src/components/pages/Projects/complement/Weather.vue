<template>
	<div>
		<div v-for="weather in weathers">
			<img :src="`http://openweathermap.org/img/wn/${weather.icon}@4x.png`">
		</div>
		<h5 v-if="main" class="text-info">Temperature : {{getCelcius(main.temp)}}&deg;C</h5>
	</div>
</template>


<script>
	export default {
		props: {
			city: String
		},

		data() {
			return {
				main: {},
				show: false,
				weathers: [],
				apiKey: '172033330b26104e83475e409303f1d7'
			}
		},

		created() {
			this.getWeather()
		},

		methods: {
			getCelcius(num){
				num = parseFloat(num)
				return Math.ceil((num - 32) / 1.8)
			},
			getWeather(){
				fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=imperial&appid=${this.apiKey}`)
				.then(res => res.json())
				.then(res => {
					console.log(res)
					this.show = true
					this.main = res.main
					this.weathers = res.weather
				})
			}
		}
	}
</script>