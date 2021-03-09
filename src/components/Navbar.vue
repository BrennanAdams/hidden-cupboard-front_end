<template>
    

    <nav class="navbar-main navbar-expand-lg nav-">      
            <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
                <!-- This is what you see on the top left corner of navbar -->
            <!-- <h4 class="" >Hidden Cupboard</h4>  -->
            <!-- Upper right hand corner, acts as a home button and title page -->
            <router-link to="/" class="main-text">Hidden Cupboard</router-link> 

                <ul class="nav">
                    <li class="menu-item">
                        <!-- This is the button for the Contact page -->
                        <router-link to="/contactPage" class="">Contact Us</router-link>   
                    </li>
                    <li class="menu-item">
                        <!-- This is the button for the Info page -->
                        <router-link to="/infoPage" class="">Info</router-link>   
                    </li>
                    <li class="menu-item">
                        <!-- This is the button for the Sign in/Login Page page -->
                        <router-link to="/loginPage" class="">Sign Up/Login In</router-link>   
                    </li>
                    
                </ul>
                  <searchBar/>
            </div>
    </nav>
</template>

<script>
import searchBar from './searchBar.vue'
export default {
  components: { 
    searchBar 
  },
}
</script>

<style>
nav {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
nav .menu-item {
  color: rgb(0, 0, 0);
  padding: 10px ;
  position: flex;
  text-align: center;
  border-radius: 4px;
  display: flex;
  transition: 0.4s;
}
nav .menu-item.active,
nav .menu-item:hover {
  background-color: rgba(68, 68, 68, 0.157);
}
nav .menu-item a {
  color: inherit;
  text-decoration: none;
}

h4{
   padding-right: 35px; 
}
.navbar-main{
  background-color: #171f2526;
}

.main-text{
  color: inherit;
  font-size: 30px;
}

.main-text:hover {
  color: inherit; 
  text-decoration: none;
  cursor:pointer;
}
</style>