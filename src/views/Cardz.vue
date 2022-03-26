<template>
 <section id="Products" style="min-height: 100vh; width: 100%; justify-content: center; flex-direction: column; display: flex; ">

  <div class="container d-flex justify-content-end mb-2 mt-5 pt-3">
    <div class="d-flex w-25 ms-3">
      <label for="" class="form-label">Sort by category
      </label>

      <select
        class="form-select"
        name=""
        id="sortCategory"
        onchange="sortCategory()">
        <option value="All">ALL</option>
        <option value="One-Way">One-Way</option>
        <option value="Return">Return</option>
      </select>
    </div>
  </div>
  <div id="products" class="container d-flex mb-3">
 </div>
</section>
</template>

<script>
export default {
    components: {},
    mounted(){    
    let products = JSON.parse(localStorage.getItem("products"))
        ? JSON.parse(localStorage.getItem("products"))
        : [
      {
        brand: "FLYSA",
        category: "One-Way",
        price: 299.99,
        img: "https://images7.alphacoders.com/459/thumbbig-459712.webp",
        route: "Cape Town - Jo'Burg",
        depdate: "2022-03-27",
        retdate: "2022-03-29",
        deptime: "17:00",
        rettime: "17:00"

        
      },
      {
        brand: "FLYSA",
        category: "One-Way",
        price: 299.99,
        img: "https://images7.alphacoders.com/459/thumbbig-459712.webp",
        route: "Cape Town - Jo'Burg",
        depdate: "2022-03-27",
        retdate: "2022-03-29",
        deptime: "17:00",
        rettime: "17:00"
        
        },
      {
        
        brand: "FLYSA",
        category: "One-Way",
        price: 299.99,
        img: "https://images7.alphacoders.com/459/thumbbig-459712.webp",
        route: "Cape Town - Jo'Burg",
        depdate: "2022-03-27",
        retdate: "2022-03-29",
        deptime: "17:00",
        rettime: "17:00"
        },
      {
        
        brand: "FLYSA",
        category: "One-Way",
        price: 299.99,
        img: "https://images7.alphacoders.com/459/thumbbig-459712.webp",
        route: "Cape Town - Jo'Burg",
        depdate: "2022-03-27",
        retdate: "2022-03-29",
        deptime: "17:00",
        rettime: "17:00"
        },
      {
        
        brand: "FLYSA",
        category: "One-Way",
        price: 299.99,
        img: "https://images7.alphacoders.com/459/thumbbig-459712.webp",
        route: "Cape Town - Jo'Burg",
        depdate: "2022-03-27",
        retdate: "2022-03-29",
        deptime: "17:00",
        rettime: "17:00"
        },
      {
        
        brand: "FLYSA",
        category: "One-Way",
        price: 299.99,
        img: "https://images7.alphacoders.com/459/thumbbig-459712.webp",
        route: "Cape Town - Jo'Burg",
        depdate: "2022-03-27",
        retdate: "2022-03-29",
        deptime: "17:00",
        rettime: "17:00"
         },
      {
        
        brand: "FLYSA",
        category: "One-Way",
        price: 299.99,
        img: "https://images7.alphacoders.com/459/thumbbig-459712.webp",
        route: "Cape Town - Jo'Burg",
        depdate: "2022-03-27",
        retdate: "2022-03-29",
        deptime: "17:00",
        rettime: "17:00"
        },
      {
       
        brand: "FLYSA",
        category: "One-Way",
        price: 299.99,
        img: "https://images7.alphacoders.com/459/thumbbig-459712.webp",
        route: "Cape Town - Jo'Burg",
        depdate: "2022-03-27",
        retdate: "2022-03-29",
        deptime: "17:00",
        rettime: "17:00"
        }, 
      {
        
        brand: "FLYSA",
        category: "One-Way",
        price: 299.99,
        img: "https://images7.alphacoders.com/459/thumbbig-459712.webp",
        route: "Cape Town - Jo'Burg",
        depdate: "2022-03-27",
        retdate: "2022-03-29",
        deptime: "17:00",
        rettime: "17:00"
        },
    ];        
    let cart = JSON.parse(localStorage.getItem("cart"))
  ? JSON.parse(localStorage.getItem("cart"))
  : [];
  // READ
    function readProducts(products) {
      document.querySelector("#products").innerHTML = "";
      products.forEach((product, position) => {
        document.querySelector("#products").innerHTML += `
      <div class="card">
        <img src="${product.img}" class="card-img-top" alt="${product.brand}">
        <div class="card-body">
          <h5 class="card-title">${product.brand}</h5>
          <p class="card-text">R${product.price}</p>
          <div class="d-flex mb-3">
            <input type="number" class="form-control" value=1 min=1 id="addToCart${position}">
            <button type="button" class="btn btn-secondary ms-3" onclick="addToCart(${position})"><i class="fas fa-cart-plus"></i></button>
          </div>
        </div>

          <div class="d-flex justify-content-end card-footer">
            <button type="button" class="btn btn-secondary me-3" data-bs-toggle="modal" data-bs-target="#editProduct${position}" >
              Change
            </button>

            <button type="button" class="btn btn-secondary me-3" onclick="deleteProduct(${position})" >
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
      </div>

      <div
        class="modal fade"
        id="editProduct${position}"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">

                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Edit ${product.brand}
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <div class="mb-3">
                        <label for="editBrand${position}" class="form-label">Brand</label>
                        <input
                          class="form-control"
                          type="text"
                          name="editBrand${position}"
                          id="editBrand${position}"
                          value="${product.brand}"/>
                      </div>
                      <div class="mb-3">
                        <label for="editCategory${position}" class="form-label">Category</label>
                        <select
                          class="form-select"
                          name="editCategory${position}"
                          id="editCategory${position}">
                          <option value="All">All</option>
                      <option value="One-Way">One Way</option>
                      <option value="Return">Return</option>
                        </select>
                      </div>
                      <div class="mb-3">
                        <label for="editPrice${position}" class="form-label">Price</label>
                        <input
                          class="form-control"
                          type="text"
                          name="editPrice${position}"
                          id="editPrice${position}"
                          value="${product.price}"/>
                      </div>
                      <div class="mb-3">
                        <label for="editImg${position}" class="form-label">Image URL</label>
                        <input
                          class="form-control"
                          type="text"
                          name="editImg${position}"
                          id="editImg${position}"
                          value="${product.img}"/>
                      </div>

                      <div class="mb-3">
                        <label for="editRoute${position}" class="form-label">Route</label>
                        <input
                          class="form-control"
                          type="text"
                          name="editRoute${position}"
                          id="editRoute${position}"
                          value="${product.route}"/>


                      <div class="mb-3">
                        <label for="editDepDate${position}" class="form-label">Depature Date</label>
                        <input
                          class="form-control"
                          type="date"
                          name="editDepDate${position}"
                          id="editDepDate${position}"
                          value="${product.depdate}"/>


                      <div class="mb-3">
                        <label for="editRetDate${position}" class="form-label">Return Date</label>
                        <input
                          class="form-control"
                          type="date"
                          name="editRetDate${position}"
                          id="editRetDate${position}"
                          value="${product.retdate}"/>
                    </div>

                      <div class="mb-3">
                        <label for="editDepTime${position}" class="form-label">Departure Time</label>
                        <input
                          class="form-control"
                          type="time"
                          name="editDepTime${position}"
                          id="editDepTime${position}"
                          value="${product.deptime}"/>


                      <div class="mb-3">
                        <label for="editRetTime${position}" class="form-label">Return Time</label>
                        <input
                          class="form-control"
                          type="time"
                          name="editRetTime${position}"
                          id="editRetTime${position}"
                          value="${product.rettime}"/>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal">
                        Close
                      </button>
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-dismiss="modal"
                        onclick="updateProduct(${position})">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>`;
      });
    }

    readProducts(products);
    showCartBadge();

    // CREATE
    function createProduct() {
      let brand = document.querySelector("#addBrand").value;
      let category = document.querySelector("#addCategory").value;
      let price = document.querySelector("#addPrice").value;
      let img = document.querySelector("#addImg").value;
      let route = document.querySelector("#addRoute").value;
      let depdate = document.querySelector("#addDepatureDate").value;
      let retdate = document.querySelector("#addReturnDate").value;
      let deptime = document.querySelector("#addDepatureTime").value;
      let rettime = document.querySelector("#addDepatureDate").value;  
    

      try {
        if (!brand || !price || !img)
          throw new Error("Please fill in all fields");
        products.push({
          brand,
          category,
          price,
          img,
          route,
          depdate,
          retdate,
          deptime,
          rettime
     
          
        });

        localStorage.setItem("products", JSON.stringify(products));
        readProducts(products);
      } catch (err) {
        alert(err);
      }
    }

    // UPDATE
    function updateProduct(position) {
      let brand = document.querySelector(`#editBrand${position}`).value;
      let category = document.querySelector(`#editCategory${position}`).value;
      let price = document.querySelector(`#editPrice${position}`).value;
      let img = document.querySelector(`#editImg${position}`).value;
      let route = document.querySelector(`#editRoute${position}`).value;
      let depdate = document.querySelector(`#editDepartueDate${position}`).value;
      let retdate = document.querySelector(`#editReturn${position}`).value;
      let deptime = document.querySelector(`#editDepatureTime${position}`).value;
      let rettime = document.querySelector("#addDepatureDate").value;
// {

// }
      try {
        if (!brand || !price || !img)
          throw new Error("Please fill in all fields");
        products[position] = {
          brand,
          category,
          price,
          img,
          route,
          depdate,
          retdate,
          deptime,
          rettime
        };
        localStorage.setItem("products", JSON.stringify(products));
        readProducts(products);
      } catch (err) {
        alert(err);
      }
    }

    // DELETE
    function deleteProduct(position) {
      let confirmation = confirm(
        "Are you sure you want to delete the selected product?"
      );

      if (confirmation) {
        products.splice(position, 1);
        localStorage.setItem("products", JSON.stringify(products));
        readProducts(products);
      }
    }

    // ADD TO CART
    function addToCart(position) {
      let qty = document.querySelector(`#addToCart${position}`).value;
      let added = false;
      cart.forEach((product) => {
        if (product.brand == products[position].brand) {
          alert(
            `You have successfully added ${qty} ${products[position].brand} to the cart`
          );
          product.qty = parseInt(product.qty) + parseInt(qty);
          added = true;
        }
      });
      if (!added) {
        cart.push({ ...products[position], qty });
        alert(
          `You have successfully added ${qty} ${products[position].brand} to the cart`
        );
      }

      showCartBadge();

      localStorage.setItem("cart", JSON.stringify(cart));
    }

    // Update Cart Badge
    function showCartBadge() {
      document.querySelector("#badge").innerHTML = cart ? cart.length : "";
    }

    // SORT BY CATEGORY
    function sortCategory() {
      let category = document.querySelector("#sortCategory").value;

      if (category == "All") {
        return readProducts(products);
      }

      let foundProducts = products.filter((product) => {
        return product.category == category;
      });

      readProducts(foundProducts);
      console.log(foundProducts);
    }

    // SORT BY NAME
    function sortName() {
      let direction = document.querySelector("#sortName").value;

      let sortedProducts = products.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return -1;
        }
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
          return 1;
        }
        return 0;
      });
      if (direction == "descending") sortedProducts.reverse();
      console.log(sortedProducts);
      readProducts(products);
    }

    // SORT BY PRICE
    function sortPrice() {
      let direction = document.querySelector("#sortPrice").value;

      let sortedProducts = products.sort((a, b) => a.price - b.price);

      console.log(sortedProducts);

      if (direction == "descending") sortedProducts.reverse();
      readProducts(sortedProducts);
    }
  },
};
  
</script>

<style scoped>
#products {
  flex-wrap: wrap;
  gap: 20px;
}

img {
  height: 200px !important;
  object-fit: cover;
}

.card {
  width: calc((100% / 4) - 15px);
  min-width: 300px;
  margin-bottom: 150px;
}

.card-title {
  text-transform: capitalize;
}

#Products {
    background:linear-gradient(0deg, rgba(42, 87, 13, 0.062), rgba(59, 83, 20, 0.315)), url('../assets/Pics/landing.jpg'); 
    background-repeat: no-repeat;
    background-attachment: fixed; 
    backface-visibility:visible;
    background-size: cover;
  }

</style>
