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
        <option value="RnB">RnB</option>
        <option value="Amapiano">Amapiano</option>
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
        title: "CERTIFIED LOVER BOY",
        category: "Hip-Hop",
        price: 299.99,
        img: "https://upload.wikimedia.org/wikipedia/en/7/79/Drake_-_Certified_Lover_Boy.png",
      },
      {
        title: "ASTROWORLD",
        category: "Hip-Hop",
        price: 279.99,
        img: "https://upload.wikimedia.org/wikipedia/en/0/0b/Astroworld_by_Travis_Scott.jpg",
      },
      {
        title: "INDIGO",
        category: "RnB",
        price: 279.99,
        img: "https://upload.wikimedia.org/wikipedia/en/1/1f/Chris_Brown_-_Indigo.png",
      },
      {
        title: "Banyana",
        category: "Amapiano",
        price: 319.99,
        img: "https://i1.wp.com/mposa.co.za/wp-content/uploads/2021/04/folder-9-Mposa.co_.za_-1.jpg?fit=500%2C500&ssl=1",
      },
      {
        title: "Life Of A Don",
        category: "Hip-Hop",
        price: 399.99,
        img: "https://upload.wikimedia.org/wikipedia/en/7/74/Life_of_a_Don.jpg",
      },
      {
        title: "Over It",
        category: "RnB",
        price: 219.99,
        img: "https://upload.wikimedia.org/wikipedia/en/5/5a/Summer_Walker_-_Over_It.png",
      },
      {
        title: "Californication",
        category: "Rock",
        price: 399.99,
        img: "https://www.thisisdig.com/wp-content/uploads/2021/06/californiacation.jpg",
      },
      {
        title: "Abbey Road",
        category: "Return",
        price: 329.99,
        img: "https://images7.alphacoders.com/399/399085.jpg",
      }, 
      {
        brand: "FLYSAA",
        category: "One-Way",
        price: 249.99,
        img: "https://images7.alphacoders.com/459/459712.jpg",
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
                        <label for="editTitle${position}" class="form-label">Title</label>
                        <input
                          class="form-control"
                          type="text"
                          name="editBrand${position}"
                          id="editBrand${position}"
                          value="${product.title}"/>
                      </div>
                      <div class="mb-3">
                        <label for="editCategory${position}" class="form-label">Category</label>
                        <select
                          class="form-select"
                          name="editCategory${position}"
                          id="editCategory${position}">
                          <option value="All">All</option>
                      <option value="One_way">One Way</option>
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
      let title = document.querySelector("#addTitle").value;
      let category = document.querySelector("#addCategory").value;
      let price = document.querySelector("#addPrice").value;
      let img = document.querySelector("#addImg").value;

      try {
        if (!title || !price || !img)
          throw new Error("Please fill in all fields");
        products.push({
          title,
          category,
          price,
          img,
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

      try {
        if (!brand || !price || !img)
          throw new Error("Please fill in all fields");
        products[position] = {
          brand,
          category,
          price,
          img,
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
        if (product.title == products[position].title) {
          alert(
            `You have successfully added ${qty} ${products[position].title} to the cart`
          );
          product.qty = parseInt(product.qty) + parseInt(qty);
          added = true;
        }
      });
      if (!added) {
        cart.push({ ...products[position], qty });
        alert(
          `You have successfully added ${qty} ${products[position].title} to the cart`
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

<style>
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
