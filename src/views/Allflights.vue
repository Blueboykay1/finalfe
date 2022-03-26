<template>
<h1> ALL AVAILABLE FLights</h1>
<div v-for="flight in flights" :key="flight.id" class="flights">
  <div class="card" style="width: 18rem;">
  <img src= {{flight.img}} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title"> {{flight.brand}} </h5>
    <h4 class="card-text"> {{flight.route}} </h4>
    
    <h3 class="card-text"> {{flight.depdate}} </h3>
    <h3 class="card-text"> {{flight.retdate}} </h3>
    <h3 class="card-text"> {{flight.deptime}} </h3>   
    <h3 class="card-text"> {{flight.rettime}} </h3>  
    <h3 class="card-text"> {{flight.price}} </h3>  
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            flights: []
        }
    },
    mounted(){
        fetch('https://capstone-proj-back-end.herokuapp.com/flights')
        .then(res => res.json())
        .then(data => this.flights= data)
        .catch(err=> console.log(err.message))
    }

}
</script>

<style>

</style>