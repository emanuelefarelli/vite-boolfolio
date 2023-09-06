import { createRouter,createWebHistory} from 'vue-router';

import AboutUs from './pages/AboutUs.vue';
import AppHome from './pages/AppHome.vue';
import ProjectList from './pages/ProjectList.vue';


const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path: '/',
            name: 'home', 
            component: AppHome
        },
        {
            path: '/ProjectList',
            name: 'projectList', 
            component: ProjectList
        },
        {
            path: '/AboutUs',
            name: 'aboutUs', 
            component: AboutUs
        },
    ]
});

export { router };