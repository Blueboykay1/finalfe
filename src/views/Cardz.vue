
  <template>
    <div class="body">
        <section>
            <div class="container">
                <div class="pricing-table">
                    <div class="table-item">
                        <i id="iza" class="fas fa-plane"></i>
                        <h5 class="sub-typ">One-Way</h5>
                        <ul class="feat-list">
                            <li class="feat-item">1</li>
                            
                            <li class="feat-item">2</li>
                            
                            <li class="feat-item">3</li>
                        </ul>
                        <span class="sub-price">$200</span>
                        <a href="" class="cta">Add to cart</a>
                    </div>
                </div>


                 <div class="pricing-table">
                    <div class="table-item">
                        <i id="iza" class="fas fa-plane"></i>
                        <h5 class="sub-typ">Return</h5>
                        <ul class="feat-list">
                            <li class="feat-item">1</li>
                            
                            <li class="feat-item">2</li>
                            
                            <li class="feat-item">3</li>
                        </ul>
                        <span class="sub-price">$200</span>
                        <a href="" class="cta">Add to cart</a>
                    </div>
                </div>
                 <div class="pricing-table">
                    <div class="table-item">
                       <i id="iza" class="fas fa-plane"></i>
                        <h5 class="sub-typ">One-Way</h5>
                        <ul class="feat-list">
                            <li class="feat-item">Featured Item 1</li>
                            
                            <li class="feat-item">Featured Item 2</li>
                            
                            <li class="feat-item">Featured Item 3</li>
                        </ul>
                        <span class="sub-price">$200</span>
                        <a href="" class="cta">Add to cart</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>



<script>

</script>

<style scoped>
*,
*::before,
*::after{
    margin: 0;
    padding:0;
    box-sizing: border-box;

}

html{
    font-size: 10px;
    font-family: 'Roboto', sans-serif;
}

/* :root{
    --background-color: linear-gradient(60deg, #5ff281, #5f86f2, #a65ff2, #f25fd0, #f25f61, #f2cb5f) 0 50%;
    --background-size: 300% 300%;
    --animation-properties: alternate-gradient 5s alternate infinite;
} */

.body{
    background: #030303;
}

section{
    padding: 5rem 0;
}

.container{
    width: 100%;
    max-width: 120rem;
    margin: 0 auto;
    padding: 0 1.5rem;
}

.pricing-table{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr)) ;
    grid-gap: 2.5rem;
}

.table-item{
    font-size: 2.5rem;
    text-transform: uppercase;
    text-align: center;
    color: #c2c2c2;
    padding: 2rem;
    position: relative;
    z-index: 1
}

.table-item::before,
.table-item::after{
    content: '';
    position: absolute;
}

.table-item::before{
    background-color: #030303;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.table-item::after{
    background: linear-gradient(60deg, #5ff281, #5f86f2, #a65ff2, #f25fd0, #f25f61, #f2cb5f) 0 50%;
    background-size: 300% 300%;
    animation: alternate-gradient 5s alternate infinite;
    top: -3px;
    left: -3px;
    width:calc(100% + (3px * 2));
    height: calc(100% + (3px * 2));
    z-index: -2;
}

#iza{
    font-size: 10rem;
    margin-bottom: 2rem;
    padding: 1rem;
    background: linear-gradient(60deg, #5ff281, #5f86f2, #a65ff2, #f25fd0, #f25f61, #f2cb5f) 0 50%;
    background-size:300% 300%;
    animation: alternate-gradient 5s alternate infinite;
   -webkit-background-clip: text;
    color: transparent;
} 


.sub-typ{
    letter-spacing: 1px;
    background: linear-gradient(60deg, #5ff281, #5f86f2, #a65ff2, #f25fd0, #f25f61, #f2cb5f) 0 50%;
    background-size:300% 300%;
    animation: alternate-gradient 5s alternate infinite;
    -webkit-background-clip: text;
    color: transparent;
   
}

.feat-list{
    list-style: none;
    margin: 1.5rem 0;
    letter-spacing: 1px;
}

.feat-item{
    border-top: 1px solid rgba(255, 255, 255, .1);
    font-size: 1.3rem;
    line-height: 1.5;
    padding: 1.5rem 0;
}

.feat-item:last-child{
    border-bottom: 1px solid rgba(255, 255, 255, .1);
}

.sub-price{
    display: block;
    font-size: 2.5rem;
}

.cta{
    display: inline-block;
    text-decoration: none;
    color: #c2c2c2;
    border: 2px solid rgba(255, 255, 255, .1);
    border-radius: 2rem;
    padding: 1rem 3rem ;
    margin-top: 1.5rem;
}

.cta:hover{
     background: linear-gradient(60deg, #5ff281, #5f86f2, #a65ff2, #f25fd0, #f25f61, #f2cb5f) 0 50%;
    background-size:300% 300%;
    animation: alternate-gradient 5s alternate infinite;
}

@keyframes alternate-gradient {
    50%{
    background-position: 100% 50%
    }
}

</style>