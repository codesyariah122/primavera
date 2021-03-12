<template>
	<div>
		
		<b-container>
			<b-row class="justify-content-center">
				<div class="col-12">
					<h1>{{title}}</h1>			
				</div>
			</b-row>

			<b-row>

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
								<b-button v-on:click="showDetail(product.id)" class="btn btn-primary btn-sm" v-b-modal.modal-1>See Detail</b-button>
								<!-- <a class="btn btn-outline-primary mb-3" :id="product.id" data-toggle="modal" data-target="#Modal">See Detail</a>  -->
							</b-container>
						</div>
					</b-card>
				</div>
				
				<b-modal id="modal-1" :title="details.name">
					<!-- <div v-for="detail in details" :key="detail.id"> -->
					   <div>
						  <b-card no-body class="overflow-hidden" style="max-width: 540px;">
						    <b-row no-gutters>
						      <b-col md="6">
						        <b-card-img :src="`https://puji-app.herokuapp.com/images/projects/${details.img_path}`" class="rounded-0"></b-card-img>
						      </b-col>
						      <b-col md="6">
						        <b-card-body :title="details.name">
						        	<b-card-text class="text-primary">
						        		{{details.type}}
						        	</b-card-text>
							        <b-card-text>
							          {{details.description}}
							        </b-card-text>

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
					<!-- </div> -->
				</b-modal>

			</b-row>
		</b-container>

	</div>
</template>

<script>
	import axios from 'axios'
	import modal from './Modal'

	export default{
		props: ['title'],
		data() {
			return {
				details: '',
				// modalVisible: false,
				products: []
			}
		},
		created() {
			this.getData(),
			this.showDetail()
		},
		methods: {
			getData(){
				axios.get('https://puji-app.herokuapp.com/api/data/product/show')
				.then(result => {
					this.products = result.data.data
					// console.log(result)
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