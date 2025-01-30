let productId = 1163;
let productContainer = document.querySelector(".product_container");
fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `
    <div>
     <img class="product_billede" src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="billede">
            </div>


            <div>
                <h1>Produkt information</h1>
                <h3>Model navn</h3>
                <p>${data.productdisplayname}</p>
                <h3>Farve</h3>
                <p>Grå</p>
                <h3>Pris</h3>
                <p>${data.price}</p>
            </div>

            <div class="farve">
                <h3>Sahara Team India Fanwear Round Neck Jersey</h3>
                <p>Nike - T-shirt</p>
                <h3>Vælg størrelse</h3>
                <p>S</p>
                <br>
                <a class="knap" href="produkt.html">Tilføj til kurv</a> 
        </div>
`;
  });
