export default async function getProductInformation(data) {
  return await fetch(
    "https://world.openfoodfacts.org/api/v2/product/" +
      data +
      "?fields=brands,product_name,nutriments,ingredients,categories",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((response) => {
      // console.log(response.product.categories)
      let categoryList = response.product.categories.split(",");
      
      if (response.status_verbose == "product not found") {
        return "Product not found";
      } else {
        return {
          category: categoryList[categoryList.length - 1].trim(),
          brand_name: response.product.brands,
          product_name: response.product.product_name,
          nutriments: response.product.nutriments,
          ingredients: response.product.ingredients
            ? response.product.ingredients.map((ingredient) => ingredient.text)
            : "No ingredients found",
        };
      }
    });
}
