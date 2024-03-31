const quantityCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${quantityCategories.length}`);

const array = document.querySelectorAll(".item");
array.forEach(function (item, index) {
  const category = item.querySelector("h2").textContent;
  const elements = item.querySelectorAll("li");
  console.log(`Category: ${category}`);
  console.log(`Elements: ${elements.length}`);
});
