<template>
<main>
    <h1>
        Main
    </h1>
</main>
</template>

<script>
import axios from 'axios';

export default{
    name: 'AppMain',
    data(){
        return{
            projects:[],
            apiUrl:'http://127.0.0.1:8000/api/projects'
        }
    },
    methods:{
        getProjects(){
            axios.get(this.apiUrl, {
                params: {}
            })
                .then( (response) => {
                    // console.log(response.data);
                    this.projects = response.data;
                    console.log(this.projects);
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    },
    created(){
        this.getProjects();
    }
}

</script>

<style scoped lang="scss">

</style>
