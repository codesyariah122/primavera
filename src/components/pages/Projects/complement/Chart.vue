<template>
	<div class="small">

		{{code}} | {{city}}

		<LineChart :chart-data="datacollection"></LineChart>
		<button @click="fillData()">Randomize</button>
	</div>
</template>

<script>
	import LineChart from './chart/LineChart.js'

	export default {

		props: {
			code: String,
			city: String
		},

		components: {
			LineChart
		},
		data(){
			return {
				datacollection: null
			}
		},
		mounted(){
			this.fillData()
		},
		methods: {
			fillData(){
				this.datacollection = {
					labels: [this.getRandomInt, this.getRandomInt()],
					datasets: [
						{
							label: "Data One",
							backgroundColor: '#f87979',
							data: [this.getRandomInt(), this.getRandomInt()]
						},
						{
							label: "Data One",
							backgroundColor: '#f87979',
							data: [this.getRandomInt(), this.getRandomInt()]
						}
					]
				}
			},

			getRandomInt(){
				return Math.floor(Math.random() * (50 - 5 + 1)) + 5
			},

			getWeather(){
				console.log(city + code)
			}
		}
	}
	
</script>

<style lang="scss" scoped>
	.small{
		max-width: 100%;
		margin: 150px auto;
	}
</style>