// fetch data from server
const fetchAllProducts = async () => {
  return (await fetch("https://dummyjson.com/products")).json();
};

async function getAllProducts() {
  const response = await fetchAllProducts();
  const prouducts = response.products;

  console.log(prouducts, "prouducts");

  const productsTamplate = `
   <article class="products">
        ${prouducts.map((product) => `
            <section class="product-item">
                <div class="image-wrapper">
                    <img
                        src="${product.thumbnail}"
                        alt=""
                        class="image"
                    />
                </div>
                <div class="content-wrapper">
                    <div class="title">
                        <h4>${product.title}</h4>
                    </div>
                    <div class="price">
                        ${product.price}, 
                        price with discount ${
                        ((product.price * 100 - (product.discountPercentage / 100) * (product.price * 100))) / 100
                        }
                    </div>
                    <div class="description">${product.description}</div>
                    <div class="actions">
                        <button id="cart"class="button green-solid cart">
                            Add to Cart
                        </button>
                        <button class="button more">More Details</button>
                    </div>
                </div>
            </section>  
        `).join("")}
   </article>
  `;

  document.getElementById("app").innerHTML = productsTamplate;
};

getAllProducts();