<template>
	<div>
		<h4>{{title}}</h4>
		<div class="row">
		<div v-for="project in projects" :key="project.id" class="col-md-4 mb-5">
				<div class="card">
					<div>					
					  <img :src="`https://puji-app.herokuapp.com/images/projects/${project.img_path}`" class="card-img-top" alt="...">
					  <div class="card-body">
					    <h5 class="card-title">{{project.company}}</h5>
					    <blockquote> {{project.jobdesk}} </blockquote>
					    <p class="card-text">
					    	{{project.content}}
					    </p>
					    <a :href="project.link" class="btn btn-primary">Go somewhere</a>
					</div>
				  </div>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		name: "ProjectLists",
		props: ['title'],
		data() {
			return {
				projects: []
			}
		},
		created() {
			this.getData()
		},
		methods: {
			getData() {
				axios.get('https://puji-app.herokuapp.com/api/data/project/show')
				// .then(res => res.json())
			    .then((result) => {
			        this.projects = result.data.data
			        // console.log(result)
			    })
			      .catch((err) => {
			        console.log(err)
			      })
			}
		}
	}
</script>

<style>
	
</style>