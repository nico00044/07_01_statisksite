const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const category = urlParams.get("category");
console.log(category);
const productContainer = document.querySelector(".product_list_container");

fetch(`https://kea-alt-del.dk/t7/api/products?category=` + category)
  .then((response) => response.json())
  .then(showProductList);

function showProductList(data) {
  const markup = data
    .map(
      (product) => `
  <div class="produkt">
                <a href="produkt.html?id=${product.id}">
                    <img class="gro" src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="billede1">
                    <p class="overskrift">${product.brandname}</p>
                    <p class="navn"><br>${product.productdisplayname}<br></p>
                    <p class="pris">${product.category}</p>
                    <p class="pris">Price</p>
                    <p class="nummer">${product.price}</p>
                    <p class="prisfor ${!product.discount && "hide"}">Før: ${Math.round((product.price / (100 - product.discount)) * 100)} kr.</p>
                    <p class="read_more">Read more</p>
                    <div class="rabat ${product.discount === null ? "hide" : ""}">
                        <a href="produkt.html">${product.discount}%</a>
                    </div>
                    <div class="udsolgt ${product.soldout === 0 ? "hide" : ""}">
                        <a href="produkt.html">Udsolgt</a>
                    </div>
                </a>
            </div>
`
    )
    .join("");
  productContainer.innerHTML = markup;
}
