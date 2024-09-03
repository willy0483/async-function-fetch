showDog();

function showDog() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      //   console.log(response);
      return response.json();
    })
    .then((data) => {
      //   console.table(data);

      let myDog = document.getElementById("myDogSection");
      myDog.innerHTML = `<img src="${data.message}">`;
    });
}
