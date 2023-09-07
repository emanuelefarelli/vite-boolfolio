<template>
    <div class="container">
        <div class="card" v-for="project in projects" >
            <h1>
                {{ project.title }}
            </h1>
            <div class="time-needed">
                <span>
                    Iniziato il:
                </span>
                <span>
                    - {{ project.started_at }} -
                </span>
                <span>
                    Finito il:
                </span>
                <span>
                    - {{ project.finished_at }} -
                </span>
            </div>
            <p>
                {{ project.description }}
            </p>
            <p>
                Voto finale: {{ project.final_score }}
            </p>
        </div>
    </div>
</template>
    
<script>
import axios from 'axios';

export default{
        name: 'ProjectList',
        data(){
            return{
                projects: [],
                apiUrl: 'http://127.0.0.1:8000/api/projects'
            }
        },
        // props:{
        //     projects: Array
        // }
        methods: {
            getProjects() {
                axios.get(this.apiUrl, {
                    params: {}
                })
                    .then((response) => {
                    // console.log(response.data);
                    this.projects = response.data;
                    console.log(this.projects);
                })
                    .catch(function (error) {
                    console.log(error);
                });
        }
        },
        created() {
            this.getProjects();
        },
    }
    
</script>
    
<style scoped lang="scss">
    div.container{
        width: 70%;
        margin: 3rem auto;
        display: flex;
        flex-wrap: wrap;
        div.card{
            width: calc(50% - 4rem);
            margin: 2rem;
            padding: 1rem;
            text-align: center;
            background-color: rgb(128, 86, 243);
            border-radius: 0.5rem;
            color: white;
            *{
                margin-bottom: 1rem;
            }
            p{
                padding: 0 rem;
            }
        }
    }
</style>