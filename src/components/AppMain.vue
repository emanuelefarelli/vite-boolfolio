<template>
<main>
    <!-- <ProjectList
        :projects = "projects"
    />> -->
</main>
</template>

<script>
import axios from 'axios';
import ProjectList from '../pages/ProjectList.vue';

export default{
    name: 'AppMain',
    data() {
        return {
            projects: [],
            apiUrl: 'http://127.0.0.1:8000/api/projects'
        };
    },
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
    // components: { ProjectList }
}

</script>

<style scoped lang="scss">

</style>
