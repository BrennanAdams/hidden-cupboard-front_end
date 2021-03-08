<template>
    <div class="signup">
        <title>Sing up page</title>

        <div class="container" style="max-width:30%; padding-top: 125px;">
        <h1 class="h3 mb-3 font-weight-normal">Sign up</h1>
            <hr>



        <div class="container">
            <div class="form-group">
                <input id="firstName" type="text" class="form-control" name="firstName" placeholder="First Name"
                    required="required">
            </div>
            <div class="form-group">
                <input id="lastName" type="text" class="form-control" name="lastName" placeholder="Last Name"
                    required="required">
            </div>
            <div class="form-group">
                <input id="pass" type="password" class="form-control" name="password" placeholder="Password"
                    required="required">
            </div>
            <div class="form-group">
                <input id="confirmPass" type="password" class="form-control" name="confirm password"
                    placeholder="Confirm Password" required="required">
            </div>
            <div class="form-group">
                <button id="submitButton" class="btn btn-outline-primary btn-block login-btn" v-on:click="log()" disabled >Sign Up</button>
            </div>
        </div>

        <div class="container">
            <div id="fields-check" style="display:block">
                
                <!-- make sure first and last name are filled -->
                <h6>Full first and last name</h6>
                <hr>
                <p id="fName" class="invalid">First name</p>
                <p id="lName" class="invalid">Last name</p>


                <h6>Password must contain the following:</h6>
                <hr>
                <p id="lowercase" class="invalid">Lowercase letter</p>
                <p id="capital" class="invalid">Uppercase letter</p>
                <p id="number" class="invalid">Digit</p>
                <p id="length" class="invalid">Minimum 5 characters</p>
                <p id="match" class="invalid">Matching passwords</p>
            
            </div>
        </div>



        </div>
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
        var firstName = document.getElementById('firstName')
        var lastName = document.getElementById('lastName')
        var password = document.getElementById('pass')
        var confirmPass = document.getElementById('confirmPass')
        var length = document.getElementById('length')
        var match = document.getElementById('match')
    
    firstName.onkeyup = function(){
         if(firstName.value.length > 0) {   
            fName.classList.remove("invalid")
            fName.classList.add("valid")
        } else {
            fName.classList.remove("valid")
            fName.classList.add("invalid") 
        }
    }

    lastName.onkeyup = function(){
         if(lastName.value.length > 0) {   
            lName.classList.remove("invalid") 
            lName.classList.add("valid") 
        } else {
            lName.classList.remove("valid") 
            lName.classList.add("invalid") 
        }
    }

	password.onkeyup = function() {
        
        var lowerCaseLetters = /[a-z]/g
        var upperCaseLetters = /[A-Z]/g
        var numbers = /[0-9]/g 
        var minLength = 5
        
        if(password.value.match(lowerCaseLetters)){   
            lowercase.classList.remove("invalid") 
            lowercase.classList.add("valid") 
        } else {
            lowercase.classList.remove("valid") 
            lowercase.classList.add("invalid")
        }

        // Validate capital letters        
        if(password.value.match(upperCaseLetters)){ 
            capital.classList.remove("invalid") 
            capital.classList.add("valid")
        } else {
            capital.classList.remove("valid")
            capital.classList.add("invalid")
        }

        // Validate numbers        
        if(password.value.match(numbers)){ 
            number.classList.remove("invalid")
            number.classList.add("valid")
        } else {
            number.classList.remove("valid")
            number.classList.add("invalid")
        }

        // Validate length
        if(password.value.length >= minLength){
            length.classList.remove("invalid")
            length.classList.add("valid")
        } else {
            length.classList.remove("valid")
            length.classList.add("invalid")
        }
    }

    confirmPass.onkeyup = function() {
        // Validate password and confirmPassword
        if(password.value == confirmPass.value){ 
            match.classList.remove("invalid") 
            match.classList.add("valid") 
        }else{
            match.classList.remove("valid") 
            match.classList.add("invalid") 
        }

        // Disable or Enable the button based on the elements in classList
        enableButton(lowercase, capital, number, length, match, fName, lName)
    }

    function enableButton(lowercase, capital, number, length, match ,fName, lName) {
        var button = document.getElementById('submitButton')
        if(fName.className == "valid" & lName.className == "valid" & lowercase.className == "valid" & capital.className == "valid" & number.className== "valid" & length.className== "valid" & match.className== "valid"){    
                button.disabled = false;
            }        
    } 


    },
      
    
    log(){
        var firstName = document.getElementById('firstName')
        var lastName = document.getElementById('firstName')
        var password = document.getElementById('pass')


        console.log("First name:")
        console.log(firstName.value)

        console.log("Last name:")
        console.log(lastName.value)

        console.log("password:")
        console.log(password.value)
      //window.location.href = './Home.vue'

    }

    },
    
  }
</script>

<style scoped>
#fields-check {
  background: #f1f1f1;
  position: relative;
  padding: 20px;
}

/* When the password or name requirement are correct change color to green */
.valid {
  color: green;
}

.valid:before {
  position: relative;
  left: -35px;
  content: '\2713';
}
.invalid {
  color: red;
}

.invalid:before {
  position: relative;
  left: -35px;
  content: '\00D7';
}
</style>