<template>
  <div id="app">
    
    <!-- Nav bar is at the top of every page -->
    <Navbar/>  
    <!-- This is very important, allows us to use the links in the navbar-->
    <router-view/>



    

    
  </div>
</template>





<script>

import Navbar from './components/Navbar' //Here we import the navbar component
export default {
  components:{
    Navbar  //we must declare the navbar component to use it
  }
}
</script>




<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
