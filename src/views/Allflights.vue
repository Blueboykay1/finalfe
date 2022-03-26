<template>

<section >
   
<h1 class="section-head">
            <span class="heading">Explore</span>
            <span class="sub-heading">Our Luxurious Flights</span>
        </h1>
    <div v-for="flight in flights" :key="flight.id" class="flights">
    <div class="container">
        
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
               

                <div class="flight-rating">
                    <i class="fas fa-star rating"></i>
                    <i class="fas fa-star rating"></i>
                    <i class="fas fa-star rating"></i>
                    <i class="fas fa-star rating"></i>
                    <i class="fas fa-star-half rating"></i> 
                </div>
                <router-link :to="{name: 'SingleF', params: {id: flight._id } }" class="btn btn-gradient">Book now
                  <span class="dots"><i class="fas fa-ellipsis-h"></i></span> 
                </router-link>
            </div>

          
            
        </div>
        <br>
    </div>
    </div>
</section>
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