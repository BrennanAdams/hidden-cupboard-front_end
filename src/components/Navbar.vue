<template>
    

    <nav class="navbar-expand-lg nav-">      
            <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
                <!-- This is what you see on the top left corner of navbar -->
            <!-- <h4 class="" >Hidden Cupboard</h4>  -->
            <!-- Upper right hand corner, acts as a home button and title page -->
            <router-link to="/" class="main-text">
              <img src="../assets/logo.png" alt="Hidden Cupboard" width="320" height="180">
            </router-link> 
            

                <ul class="nav">
                   

                    <li class="menu-item">
                        <!-- This is the button for the Info page -->
                        <router-link to="/cupboardPage" class="nav-titles">Cupboard</router-link>   
                    </li>
                    <li class="menu-item">
                        <!-- This is the button for the Sign in/Login Page page -->
                        <router-link to="/recipePage" class="nav-titles">Recipes</router-link>   
                    </li>
                    <li class="menu-item">
                        <!-- This is the button for the Sign in/Login Page page -->
                        <router-link to="/loginPage" class="nav-titles">Login/Sign up</router-link>   
                    </li>

                    

                    <!-- This is the dropdown menu titled "MORE" -->
                    <li class=" dropdown menu-item">
                      <a class="dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">More</a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <!-- insert elements here -->

                        <li class="menu-item">
                        <!-- This is the button for the Contact page -->
                          <router-link to="/contactPage" class="">Contact Us</router-link>   
                        </li>

                        <li class="menu-item">
                            <!-- This is the button for the Info page -->
                          <router-link to="/infoPage" class="">Info</router-link>   
                        </li>

                      </div>
                    </li>

                    
                </ul>
                  <searchBar/>
            </div>
    </nav>
</template>

<script>
import 'bootstrap/dist/js/bootstrap.bundle';

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
  background-color: #c7efffa9;
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
  padding-left: 20px;
}

.main-text:hover {
  color: inherit; 
  text-decoration: none;
  cursor:pointer;
}

.nav-titles{
  text-align: left;
}
</style>