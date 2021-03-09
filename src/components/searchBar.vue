<template>
    <form class="form-inline">
        <input class="form-control mr-sm-2 search-bar" id="search-bar" type="search" placeholder="Search" aria-label="Search">
        <button class="btn menu-item my-1" type="submit" v-on:click="search()">Search</button>
    </form> 
</template>

<script>
export default {
    //when the page loads call the load function
    methods:{
        //when the user clicks the search menu
        search(){
            var input = document.getElementById('search-bar')
            
            //right now output to console later link to database,
            console.log("You searched:")
            console.log(input.value)

            //then we want to switch to that search page
            
        }   
    }
}
</script>

<style>
.search-btn{
  border:1px solid rgba(39, 39, 39, 0.363)
}
</style>