//Demonstration of returning responses from an API

document.querySelector("#searchButton").addEventListener("click", (e) => {
  //set variables to hold key and search value
  const client_id = "rLq9bvi_8PHd4HDf1G24bOnATPnByqoMjRtvGbFxMf0";
  const searchStr = document.querySelector("#userInput").value;
  const resource = `https://api.unsplash.com/search/photos?query=${searchStr}&per_page=20&client_id=${client_id}`;

  //fetch from api
  e.preventDefault();
  fetch(resource)
    .then((res) => res.json())
    .then((data) => {
      const container = document.querySelector(".container");
      //loop over responses and append them the container set within html
      for (let i = 0; i < data.results.length - 1; i++) {
        const img = document.createElement("img");
        const url = data.results[i].urls.thumb;
        img.setAttribute("src", url);

        container.append(img);
      }
    });
  //clear the search bar after submit is hit
  document.querySelector(".d-flex").reset();
});
