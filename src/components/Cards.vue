<template>
  <div class="container">
        <div class="row" v-if="flights">
          <div
            v-for="(flight, index) of flights"
            :key="index"
            class="col-lg-4 mb-4"
          >
            <div class="card">
              <img :src="flight.img" alt="" class="card-img-top" />
              <div class="card-body">
                <br />
                <h5 class="card-title text-primary">{{ flight.name }}</h5>

                <i class="bi bi-whatsapp"></i>
                <router-link to="/login">  <button type="button" class="btn btn-success text-dark me-2">  <i class="bi bi-whatsapp">W/app Me</i> </button> </router-link>
                <router-link to="/login">  <button type="button" class="btn btn-warning text-dark me-2"> Book Me </button> </router-link>

               <p class="card-text">Brand : {{ flight.brand }}</p>
                <p class="card-text">{{ flight._id }}</p>
              </div>
              <div class="card-footer">

                <small class="text-muted text-success">price : {{ flight.price }}</small>
                <br>
               <small class="text-muted">Location : {{ flight.location }}</small>

              </div>

              <br>

            </div>
          </div>

        </div>
      </div>
</template>

<script>
export default {
    
    // data(){
    //     return{
    //     let flights =[
    //             {},{}
    //         ]

    //     }


    // }
        
    

}
</script>

<style>

</style>