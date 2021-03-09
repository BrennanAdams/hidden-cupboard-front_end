<template>
  <div id="app">

  <header>
    <!-- Nav bar is at the top of every page -->
     <Navbar/>
  </header>

    <!-- This is very important, allows us to use the links in the navbar-->
    <router-view/>

  </div>
</template>





<script>

import Navbar from './components/Navbar' //Here we import the navbar component\
export default {
  components:{
    Navbar,  //we must declare the navbar component to use it
  }
}
</script>




<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'montserrat', sans-serif;
  background-color: #F8F8F8;
}
</style>
