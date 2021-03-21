<template>
	<div>
		<b-container>
			<b-row>
				<div class="col-12 mb-3 mt-5">
					<div class="movie-box">
						<blockquote class="quote">
							{{blockquote}}
						</blockquote>
						<input v-model="keyword" type="text" :placeholder="title" name="movie" class="form-control" id="basic-url" aria-describedby="basic-addon3" autofocus="on" autocomplete @keyup="getMovie($event)">
						<!-- <button type="submit" class="btn btn-sm btn-primary" @click="getMovie">Submit</button> -->
						<div v-if="keyword" style="font-size: 14px;">
							Search movie : <span class="text-danger">{{keyword}}</span>
						</div>
					</div>
				</div>
				<div class="col-12">

					<div v-if="loading">
						<Loader/>
					</div>

				</div>
			</b-row>

			<b-row>
				<div v-for="list in lists" class="col-md-4">
				  <b-card
				    :title="list.Title"
				    :img-src="list.Poster"
				    :img-alt="list.Title"
				    img-top
				    tag="article"
				    style="max-width: 20rem;"
				    class="mb-4"
				  >
				    <p style="font-size:12px;">
				      {{list.Year}} | Type : {{list.Type}}.
				    </p>

				    <b-button  @click="getDetail(list.imdbID)" variant="primary" v-b-modal.modal-detail>See Detail</b-button>
				  </b-card>
				</div>

				<b-modal id="modal-detail" :title="`Detail Movie | ${details.Title}`">
			    	<CardDetails :details="details"/>
			  	</b-modal>

			</b-row>
		</b-container>
	</div>
</template>


<script>
	import axios from 'axios'
	import Loader from './Loader.vue'
	import CardDetails from './CardDetails.vue'

	export default {
		name: 'MovieProject',
		props: ['title'],
		components: {
			Loader,
			CardDetails
		},
		data(){
			return {
				blockquote: 'Cari film favoritmu disini, ketik di kolom pencarian',
				keyword: '',
				lists: [],
				details: {},
				loading: false			
			}
		},

		methods: {
			getMovie(event){
				this.keyword = event.target.value
				axios.get(`http://omdbapi.com/?apiKey=fb7e43c&s=${this.keyword}`)
				.finally(() => {
					setTimeout(() => {
						this.loading=true
					}, 500)
				})
				.then(data => {
					setTimeout(() => {
						this.lists = data.data.Search
						// console.log(this.lists)
						this.loading=false
					}, 3500)
				})
				.catch(err => console.log(err))
			},

			getDetail(id){
				axios.get(`http://www.omdbapi.com/?apiKey=fb7e43c&i=${id}`)
				.then(i => {
					console.log(i)
					this.details = i.data
				})
				.catch(err => console.error(err))
			}

		}


	}
</script>

<style>
.movie-box{
	margin-left: 2.7rem;
	margin-top:2.5rem;
}
.quote{
	font-size: 14px;
	margin-left: 1rem;
}

@media only screen and (min-width: 768px) {
	.quote{
		margin-left: 3rem;
	}
}
</style>