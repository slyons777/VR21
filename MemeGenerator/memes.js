document.querySelector("#submit").addEventListener("click", (e) => {})



document.querySelector("#submit").addEventListener("click", (e) => {
   e.preventDefault();
   const image = document.querySelector('#imageURL').value;
   const topQuote = document.querySelector('#top-quote').value;
   const bottomQuote = document.querySelector('#bottom-quote').value;

   
   const contentCard = `
   <div class="col-md-3">
          <div class="card">
            <div class="card-body">
                <h3 class="top-quote">${topQuote}</h3>
            </div>
            <img
              src=${image}
              class="card-img"
              alt="..."/>
            <div>
               <h3 class="bottom-quote">${bottomQuote}</h3>
            </div>
          </div>
        </div>
      `
      document.querySelector('.row').insertAdjacentHTML("beforeend", contentCard);
   
});