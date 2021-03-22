<template>
	<div>
		
		<b-container>
			<b-row class="justify-content-center">
				<div class="col-12">
					<h3 class="text-center text-secondary">{{title}}</h3>
					<hr/>			
				</div>
			</b-row>

			<b-row>
				<div v-if="loading" class="text-center">
					<img :src="anim" width="250" height="150" class="img-responsive">
				</div>
				<div v-for="product in products" :key="product.id" class="col-md-4 mb-5 mt-2">
					<b-card>
						<div>
							<b-container>
								<img :src="`https://puji-app.herokuapp.com/images/projects/${product.img_path}`" class="card-img-top" alt="product.id">
								<h5 class="card-title">
									{{product.name}}
								</h5>
								<p class="text-danger">Price : {{product.price}}</p>
								<blockquote class="text-secondary">
									{{product.description}}
								</blockquote>
								<p>{{product.type}}</p>
								<b-button @click="showDetail(product.id)" class="btn btn-primary btn-sm" v-b-modal.modal-1>See Detail</b-button>
								<!-- <a class="btn btn-outline-primary mb-3" :id="product.id" data-toggle="modal" data-target="#Modal">See Detail</a>  -->
							</b-container>
						</div>
					</b-card>
				</div>
				
				<b-modal id="modal-1" :title="details.name">
					<CardDetail :details="details"/>
				</b-modal>
			</b-row>
		</b-container>

	</div>
</template>

<script>
	import axios from 'axios'
	import CardDetail from './CardDetail.vue'
	import loadingGif from './loading.gif'

	export default{
		props: ['title'],
		components: {
			CardDetail
		},
		data() {
			return {
				products: [],
				details: {},
				loading: false,
				anim: loadingGif
			}
		},
		created() {
			this.getData(),
			this.showDetail()
		},
		methods: {
			getData(){
				axios.get('https://puji-app.herokuapp.com/api/data/product/show')
				.finally(() => {
					setTimeout(() => {	
						this.loading=true
					}, 500)
				})
				.then(result => {
					setTimeout(() => {
						this.loading=false
						this.products = result.data.data
					}, 5000)
				})
				.catch(err => {
					console.log(err)
				})
			},
			showDetail(id){
				axios.get(`https://puji-app.herokuapp.com/api/data/product/show/id/${id}`)
				.then(result => {
					this.details=result.data.data
					console.log(result)
				})
			}

			// openModal(data){
			// 	this.products=data
			// 	this.modalVisible=true
			// }
		}

	}
</script>

<style lang="scss" scoped>

.card{
	blockquote{
		font-size: 12px;
	}
	p{
		font-size:14px;
	}
}	

</style>