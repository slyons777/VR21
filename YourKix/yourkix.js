//responds to add button
//responds to delete button
//responds to update button


//building card and adding to dom
document.querySelector("#add-post").addEventListener("click", (e) => {
    e.preventDefault();
    const shoeImage = document.querySelector('#imageUrl').value;
    const shoeName = document.querySelector('#shoeName').value;
    const condition = document.querySelector('#condition').value;
    const price = document.querySelector('#price').value;

   
    const contentCard = `
    <div class="col-md-3">
        <div class="card">
        <div class="card-body">
        <img
            src=${shoeImage}
            class="card-img-top"
            alt="..."
        />
        
            <h5 class="card-title" id="shoeName">${shoeName}</h5>
            <p class="card-text">
            <p class="h5" id="condition">${condition}</p>
            <p class="h6" id="price">${price}</p>
            </p>
            <div>
            <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#updateModal"
            >
                Update                                                           
            </button>
            <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#deleteModal"
            >
                Delete
            </button>
            </div>
        </div>
        </div>
    `
   

    document.querySelector(".row").insertAdjacentHTML("beforeend", contentCard);
});

//delete post action
document.querySelector("#delete-button").addeEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector('');
})