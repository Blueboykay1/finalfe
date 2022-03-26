<template>

<div v-if="flight">
  <div class="card" style="width: 18rem;">
      
  <div class="grid-item featured-flights">
      <img src="../assets/Pics/f1.jpg" alt="" class="flight-image">
    <h5 class="flight-name"> {{flight.brand}} </h5>
    <h4 class="flight-price"> {{flight.route}} </h4>
    
    <h3 class="flight-price">Departure Date: {{flight.depdate}} </h3>
    <h3 class="flight-price">Return Date {{flight.retdate}} </h3>
    <h3 class="flight-price">Departure Time: {{flight.deptime}} </h3>   
    <h3 class="flight-price">Return Time: {{flight.rettime}} </h3>  
    <h3 class="flight-price"> {{flight.price}} </h3>  
    <a href="#" class="btn btn-primary">BOOK FLIGHT</a>
  </div>
  </div>
</div>
</template>

<script>
export default {
    props: ['id'],
    data(){
        return{
            flight: null
        }
    },
    mounted(){
        fetch('https://capstone-proj-back-end.herokuapp.com/flights/'+ this.id)
        .then(res => res.json())
        .then(data => this.flight = data)
        .catch(err=> console.log(err.message))
    }

}
</script>

<style>

.section-head{
  text-align: center;
  margin-bottom: 5rem;
}

.heading{
  display: block;
  font-size: 4rem;
  text-transform: uppercase;
}

.sub-heading{
  font-size: 1.7rem;
  font-family: 'Courgette', cursive;
  font-weight: 300;
  color: #a5a5a5;
}

.grid{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr)) ;
  grid-gap: 2.5rem;
}
.grid-item{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.featured-flights{
  height: 35rem;
  color: #fff;
  padding: 1rem;
  position: relative;
  z-index: 0;

}
.featured-flights::before{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color:  rgba(53, 10, 79, .5);
  z-index: -1;

}

.flight-image{
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
}

.flight-name{
  font-size: 2.6rem;
  font-weight: bold;
}

.flight-price{
  font-size: 1.8rem;
}

.flight-rating{
  margin: 1rem 0 2.5rem;
}
.rating{
  color: var(--yellow-solid)
}

</style>