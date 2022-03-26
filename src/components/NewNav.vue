<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"><i class="fa-solid fa-plane-arrival"></i></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" to="/login">Login</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            MORE ACTIONS
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/signup">Signup</a></li>
            <li><a class="dropdown-item" href="/flights">Flights</a></li>
            <li><a class="dropdown-item" href="/contact">Contact Us</a></li>
            <li><a class="dropdown-item" href="/flights">Flights</a></li>
            <li @click="logout" ><a class="dropdown-item" href="/">Logout</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
</template>

<script>
export default {
  logout(){
    localStorage.clear();
    alert("User logged out")

  }

}
</script>

<style scoped>

</style>