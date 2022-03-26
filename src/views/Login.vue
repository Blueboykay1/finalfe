<template>
  <div class="body">
<h2>Login Form</h2>

<form @submit.prevent="login" >
  <div class="imgcontainer">
    <img src="img_avatar2.png" alt="Avatar" class="avatar">
  </div>

  <div class="container" >
    <label for="email"><b>E-Mail</b></label>
    <input type="email" placeholder="Enter e-mail" name="email" v-model="email" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" v-model="password" required>
        
    <button type="submit">Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember"> Remember me
    </label>

    <b-alert show dismissible variant="danger" v-if="errors.length > 0">
      <span v-for="error in errors" :key="error">
        {{error}}
      </span>
    </b-alert>
  </div>
  <div class="success" v-if="showSuc">
   <h4>You have successfully enntered your details </h4>
  </div>

  
</form>
</div>
</template>

<script>
export default {
  data() {
    return {
      errors: [],
      email: null,
      password: null,
     
    
    };
  },
  methods: {
    
    login() {
        let user = {
            email: this.email,
            password: this.password,
          }
          console.log(user)
        fetch("https://capstone-proj-back-end.herokuapp.com/users/login", {
          method: "PATCH",
          body: JSON.stringify(user),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((json) => {
            localStorage.setItem("jwt", json.jwt);
            
            alert("Logging in...");
            this.$router.push({ name: "Cardz" });
            console.log("jwt", json.jwt)
          })
          .catch((err) => {
            alert(err);
          });
      
    },
  },
};
</script>

<style scoped>
.body {font-family: Arial, Helvetica, sans-serif;}
form {border: 3px solid #f1f1f1;}

input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

img.avatar {
  width: 40%;
  border-radius: 50%;
}

.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
     display: block;
     float: none;
  }
  .cancelbtn {
     width: 100%;
  }
}

</style>