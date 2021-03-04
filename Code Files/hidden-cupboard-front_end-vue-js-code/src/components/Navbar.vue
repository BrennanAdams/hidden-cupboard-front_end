<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">

            

           
            <div class="collapse navbar-collapse " id="navbarNav">
                <!-- This is what you see on the top left corner of navbar -->
            <a class="navbar-brand">Hidden Cupboard</a> 
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>




                <ul class="navbar-nav">
                    <li class="nav-item active">
                         <!-- This is the button for the Home page -->
                        <router-link to="/" class="nav-link">Home</router-link>   
                    </li>
                    <li class="nav-item active">
                        <!-- This is the button for the Contact page -->
                        <router-link to="/contactPage" class="nav-link">Contact Us</router-link>   
                    </li>
                    <li class="nav-item active">
                        <!-- This is the button for the Info page -->
                        <router-link to="/infoPage" class="nav-link">Info</router-link>   
                    </li>
                    <li class="nav-item active">
                        <!-- This is the button for the Sign in/Login Page page -->
                        <router-link to="/loginPage" class="nav-link">Sign Up/Login In</router-link>   
                    </li>
                    
                </ul>
                  <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>  
            </div>
    </nav>
</template>