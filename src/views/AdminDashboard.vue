<template>
<h1> ALL Current FLights</h1>
<div v-for="flight in flights" :key="flight.id" class="flights">
   <div class="grid">
            <div class="grid-item featured-flights">
                <img src="../assets/Pics/f1.jpg" alt="" class="flight-image">
                <h5 class="flight-name">{{flight.brand}}</h5>
                <span class="flight-price">{{flight.route}}</span>
                <span class="flight-price">Departure Date:{{flight.depdate}}</span>
                <span class="flight-price">Return Date:{{flight.retdate}}</span>
                <span class="flight-price">Departure Time:{{flight.deptime}}</span>
                <span class="flight-price">Return Time:{{flight.rettime}}</span>
                <span class="flight-price">{{flight.price}}</span>
               
                 <btn @click="update" href="#" class="btn btn-gradient">UPDATE</btn>
       <a href="#" class="btn btn-gradient">DELETE</a>
       
  </div>
  </div>
  <br>
</div>

<h1> ALL Current users</h1>
<div v-for="user in users" :key="user.id" class="users">
   <div class="grid">
            <div class="grid-item featured-flights">
                <img src="https://images.alphacoders.com/298/thumb-1920-298721.jpg" alt="" class="flight-image">
                <h5 class="flight-name">{{user.full_name}}</h5>
                <span class="flight-price">Role:{{user.role}}</span>
                <span class="flight-price">About:{{user.about}}</span>
                <span class="flight-price">Contact Number:{{user.contact_number}}</span>
                <span class="flight-price">Join Date:{{user.joindate}}</span>
                <span class="flight-price">Avatar:{{user.avatar}}</span>
               
                 <btn @click="update" href="#" class="btn btn-gradient">UPDATE</btn>
       <a href="#" class="btn btn-gradient">DELETE</a>
       
  </div>
  </div>
  <br>
</div>
</template>

<script>
export default {
    data(){
        return{
            flights: [],
            users: []
        }
    },
    mounted(){
        fetch('https://capstone-proj-back-end.herokuapp.com/flights')
        .then(res => res.json())
        .then(data => this.flights= data)
        .catch(err=> console.log(err.message))

        fetch('https://capstone-proj-back-end.herokuapp.com/users')
        .then(res => res.json())
        .then(data => this.users= data)
        .catch(err=> console.log(err.message))
    },

    updat(){

    }

}
</script>

<style>

</style>