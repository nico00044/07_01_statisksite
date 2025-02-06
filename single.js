const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const identity = urlParams.get("id");
console.log(identity);

let productContainer = document.querySelector(".product_container");
fetch(`https://kea-alt-del.dk/t7/api/products/${identity}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `
    <div>
    <div class="imggrid">
     <img class="product_billede" src="https://kea-alt-del.dk/t7/images/webp/640/${identity}.webp" alt="billede">
    

     <div class="rabat ${data.discount === null ? "hide" : ""}">
                        <a href="produkt.html">${data.discount}%</a>
                    </div>
                    <div class="udsolgt ${data.soldout === 0 ? "hide" : ""}">
                        <a href="produkt.html">Udsolgt</a>
                    </div>
                     </div>
     </div>


            <div>
                <h1>Produkt information</h1>
                <h3>Model navn</h3>
                <p>${data.productdisplayname}</p>
                <h3>Farve</h3>
                <p>Grå</p>
                <h3>Pris</h3>
                <p>${data.price}</p>
                 <p class="prisfor ${!data.discount && "hide"}">Før: ${Math.round((data.price / (100 - data.discount)) * 100)} kr.</p>
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
