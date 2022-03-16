<template>
  <main>
 <div class="hero">
      <div class="container">
          <div class="main-heading">
            <h1 class="title">Discover</h1>
            <h2 class="subtitle">Affordable Flights</h2>

          </div>
          <a href="/login" class="btn btn-gradient">Explore Now
            <!-- <i class="fal fa-anchor"></i> -->
          </a>
      </div>
 </div>
<section class="booking">
<div class="container">
  <form action="" class="form">
      <div class="input-group">
        <label for="destination" class="input-label">Destination</label>
        <input type="text" class="input" id="destination">
      </div>

      <div class="input-group">
        <label for="check-in" class="input-label">Check in</label>
        <input type="text" class="input" id="check-in">
      </div>


      <div class="input-group">
        <label for="check-out" class="input-label">Check out</label>
        <input type="text" class="input" id="check-out">
      </div>

      <div class="input-group">
        <label for="adults" class="input-label">Adults</label>
        <select name="" id="adults" class="options">
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      <div class="input-group">
        <label for="children" class="input-label">children</label>
        <select name="" id="children" class="options">
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <button type="submit" class="btn form-btn btn-purple">Search
        <span class="dots"><i class="fas fa-ellipsis-h"></i></span>

      </button>
  </form>

</div>








</section>
<section class="hotels">
    <div class="container">
        <h5 class="section-head">
            <span class="heading">Explore</span>
            <span class="sub-heading">Our Luxurious Flights</span>
        </h5>
        <div class="grid">
            <div class="grid-item featured-flights">
                <img src="../assets/Pics/f1.jpg" alt="" class="flight-image">
                <h5 class="flight-name">Astro Flight</h5>
                <span class="flight-price">From $200/Flight</span>
                <div class="flight-rating">
                    <i class="fas fa-star rating"></i>
                    <i class="fas fa-star rating"></i>
                    <i class="fas fa-star rating"></i>
                    <i class="fas fa-star rating"></i>
                    <i class="fas fa-star-half rating"></i> 
                </div>
                <a href="" class="btn btn-gradient">Book now
                  <span class="dots"><i class="fas fa-ellipsis-h"></i></span> 
                </a>
            </div>

            <div class="grid-item featured-flights">
                <img src="../assets/Pics/f1.jpg" alt="" class="flight-image">
                <h5 class="flight-name">Astro Flight</h5>
                <span class="flight-price">From $200/Flight</span>
                <div class="flight-rating">
                    <i class="fas fa-star rating"></i>
                    <i class="fas fa-star rating"></i>
                    <i class="fas fa-star rating"></i>
                    <i class="fas fa-star rating"></i>
                    <i class="fas fa-star-half rating"></i> 
                </div>
                <a href="" class="btn btn-gradient">Book now
                  <span class="dots"><i class="fas fa-ellipsis-h"></i></span> 
                </a>
            </div>
            
        </div>
    </div>
</section>
<section class="contact">
    <div class="container">
        <h5 class="section-head">
          <span class="heading">Contact</span>
          <span class="sub-heading">Get in touch with us</span>
        </h5>
      
    </div>

</section>

  </main>
</template>

<script>


</script>
<style  >

@import url('https://fonts.googleapis.com/css?family=Courgette|Open+Sans:400,800&display=swap');

*,
*::before,
*::after{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Reusable styles */

.btn{
  color: #fff;
  font-size: 1.3rem;
  font-weight: bold;
  text-transform: uppercase;
  padding: .5trm 3.5rem;
  border: none;
  border-radius: 10rem;
  font-family: cursive;
}

.container{
  width: 100%;;
  max-width: 120rem;
  padding: 0 1.5rem;
  margin: 0 auto;
  background: transparent;

}
 .form-btn{
   margin-top: 2.5rem;
   cursor: pointer;
 }
 .btn-gradient{
 background-image:   var(--gradient-color)
 }

.btn-gradient:hover{
 background-image:   var(--gradient-color-alt)
 }

 .btn-purple{
  background-color: var(--purple-solid);
  transition: background-color .5s;
}
.btn-purple:hover{
  background-color: var(--purple-light);
}


.dots{
  font-size: 2.4rem;
  margin-left: .5rem;
  opacity: .75;
}


:root{
  --dark-color: #2d2c2c;
  --purple-solid:#350a4f;
  --purple-transparent: rgba(53, 10, 79, .7);

  --purple-transparent-alt: rgba(53, 10, 79, .5);
  --purple-light: #8f50fb;
  --yellow-solid:#fa9e2c;
  --gradient-color: linear-gradient(to right, var(--yellow-solid), var(--purple-light));

  --gradient-color-alt: linear-gradient(to right, var(--purple-light, var(--yellow-solid)));
}
html{
  font-size: 10px;
}
body{
  font-family: 'Open Sans', sans-serif;
  font-size: 1.6rem;
  color: var(--dark-color);
}
/* hero styles */
.hero{
  width: 100%;
  height: 100vh;

  background: url('../assets/Pics/wally.jpg');
/* background: linear-gradient(90deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.23) 18%, rgb(0, 0, 0) 100%), url('../assets/Pics/wally.jpg') center no-repeat; */
  background-size: cover ;
  display: flex;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 0;
 
}
.hero::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: inherit;
  height: inherit;
  background-color: var(--purple-transparent-alt);
  z-index: -1;
}

.main-heading{
  color: #fff;
  line-height: 1;
  text-shadow: 1px 1px 1rem rgba(0,0,0,.5);
  margin-bottom: 2.5rem;
}

.title{
  font-size: 4.8rem;
  text-transform: uppercase;
  letter-spacing: 3px;
}
.subtitle{
  font-size: 3.6rem;
  font-weight: 300;
  font-family: 'Courgette', cursive;

}
.btn-gradient{
 background-image:   var(--gradient-color)
 }

.btn-gradient:hover{
 background-image:   var(--gradient-color-alt)
 }



 /* bookings styles */
 .booking{
   background-image: var(--gradient-color);
 }

 .input-group{
   margin-bottom: 1.5rem;
 }

 .input-label{
   display: block;
   font-size: 1.3rem;
   text-transform: uppercase;
   color: #fff;
   font-weight: bold;
   margin-bottom: 1rem;
 }

 input, .options{
   outline: none;
   border: none;
   width: 100%;
   min-height: 4rem;
   padding: 1rem;
   font-weight: bold;
   color: #a5a5a5;
   letter-spacing: 2px;
   font-family: "Open Sans", sans-serif;
   resize: none;
 }

 @media screen and (min-width: 1000px) {
   section:not(.booking){
     padding: 10rem 0;
   }
   
 }

/* Featurd flights section */

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