const categoryContainer = document.querySelector(".category_list_container");

fetch(`https://kea-alt-del.dk/t7/api/categories/`)
  .then((response) => response.json())
  .then(showCategoryList);

function showCategoryList(data) {
  console.log(data);
  const markup = data
    .map(
      (category) => `
  <a href="produktliste.html?category=${category.category}" class="category">${category.category}</a>
`
    )
    .join("");
  categoryContainer.innerHTML = markup;
}
