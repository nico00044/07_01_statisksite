const productContainer = document.querySelector(".product_list_container");

fetch(`https://kea-alt-del.dk/t7/api/products/`)
  .then((response) => response.json())
  .then(showProductList);

function showProductList(data) {
  const markup = data
    .map(
      (product) => `
  <div class="produkt">
                <a href="produkt.html">
                    <img class="gro" src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="billede1">
                    <p class="overskrift">Nike</p>
                    <p class="navn"><br>${product.productdisplayname}<br></p>
                    <p class="pris">Price</p>
                    <p class="nummer">1595kr.</p>
                    <p class="read_more">Read more</p>
                    <div class="rabat hide">
                        <a href="produkt.html">-34%</a>
                    </div>
                    <div class="udsolgt hide">
                        <a href="produkt.html">Udsolgt</a>
                    </div>
                </a>
            </div>
`
    )
    .join("");
  productContainer.innerHTML = markup;
}
