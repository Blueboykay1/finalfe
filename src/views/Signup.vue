<template>
<div class="body">

<form @submit.prevent="register" >
  <div class="container">
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <hr>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" id="psw" required>

    <label for="full_name"><b>Full Name</b></label>
    <input type="text" placeholder="Enter Full Name" name="full_name" id="full_name" required>

    <label for="contact_number"><b>Contact Number:</b></label>
    <input type="text" placeholder="Enter Contact Number" name="contact_number" id="email" required>
     

    <hr>
    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

    <button type="submit" class="registerbtn">Register</button>
  </div>
  
  <div class="container signin">
    <p>Already have an account? <a href="/login">Sign in</a>.</p>
  </div>
</form>

</div>
</template>
<script>
export default {
  data() {
    return {
      
      email: "",
      password: "",
      full_name: "",
      role: "",
      contact_number: ""
     
    };
  },
  methods: {
    register() {
         fetch('https://capstone-proj-back-end.herokuapp.com/users', {
  method: 'POST',
  body: JSON.stringify({
    email:this.email,
    password:this.password,
    full_name: this.full_name,
    role: this.role,
    contact_number: this.contact_number
     
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
      this.msg = `${ this.name }  Registered Successfuly`;
       alert("Signing you up...");
          this.$router.push({ name: "Cardz" });
    },
  },
};
</script>
<style scoped>
.body {
  font-family: Arial, Helvetica, sans-serif;
  
}

* {
  box-sizing: border-box;
}

/* Add padding to containers */
.container {
  padding: 16px;
  background-color: white;
}

/* Full-width input fields */
input[type=text], input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

/* Overwrite default styles of hr */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for the submit button */
.registerbtn {
  background-color: #04AA6D;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.registerbtn:hover {
  opacity: 1;
}

/* Add a blue text color to links */
a {
  color: dodgerblue;
}

/* Set a grey background color and center the text of the "sign in" section */
.signin {
  background-color: #f1f1f1;
  text-align: center;
}
</style>