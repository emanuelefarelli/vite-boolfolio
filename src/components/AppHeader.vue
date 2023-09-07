<template>
<header>
    <nav>
        <ul>
            <li>
                <router-link :to="{ name: 'home' }">
                    Home
                </router-link>
            </li>

            <li>
                <router-link :to="{ name: 'projectList' }">
                    Project List
                </router-link>
            </li>

            <li>
                <router-link :to="{ name: 'aboutUs' }">
                    About Us
                </router-link>
            </li>
        </ul>
    </nav>
</header>
</template>

<script>
export default{
    name: 'AppHeader',
}
</script>

<style scoped lang="scss">
    nav{
        width: 100%;
        height: 100px;
        background-color: grey;
        margin: 0 auto;
        ul{
            height: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            list-style-type: none;
            a{
                color: white;
                text-decoration: none;
                font-size: 1.5rem;
            }
            a:hover{
                color: rgb(196, 186, 255);
            }
        }
    }
</style>
