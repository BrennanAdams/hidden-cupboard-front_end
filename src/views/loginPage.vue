<template>
  <div class="login">
    <title>Login page</title>
 
    <div class="container" style="max-width:30%; padding-top: 125px;">
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <hr>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" name="email" required autofocus>
      <br>
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
      <br>
        <div class="form-group">
						<button id="submitButton" class="btn btn-primary btn-lg login-btn" v-on:click="log()" disabled>Login in</button>
				</div>

    </div>


    <router-link to="/signupPage" class="btn btn-outline-primary">Don't have an account yet?</router-link>
  </div>
</template>


<script>
export default {
  //when the page loads call the load function
  mounted(){
    this.load()
  },


  methods:{
    load(){
      var email = document.getElementById("inputEmail");
      var password = document.getElementById("inputPassword");
      var button = document.getElementById('submitButton')
      var emailFlag = false
      var passFlag = false

      //this checks if the user entered a proper email
        // must include '@'
      email.onkeyup = function(){
        emailFlag = true  //once user starts typing
        //update login button
        if(emailFlag == true & passFlag ==  true){
          button.disabled = false
        }
      }

      password.onkeyup = function(){
        passFlag = true
        if(emailFlag == true & passFlag ==  true){
          button.disabled = false
        }
      }
    },
    
    log(){
      var email = document.getElementById("inputEmail");
      var password = document.getElementById("inputPassword");

      console.log("Email:")
      console.log(email.value)

      console.log("Password:")
      console.log(email.value)

      //window.location.href = './Home.vue'
    }



    },
    
  }
</script>