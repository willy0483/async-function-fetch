function getData(myUrl) {
  fetch(myUrl)
    .then((response) => {
      //   console.log(response);
      return response.json();
    })
    .then((data) => {
      data.products.forEach((product) => {
        // console.table(product.price + "$");
        console.table(product);
      });
      console.table(data);
    });
}
getData(
  "https://dummyjson.com/products?limit=10&skip=0&select=title,price,description,category"
);
