// const add card = () => {
      //   console.log("Add new shoe 2")
      // }

      //preferred way to create an eventListener on button

//building card and adding to dom
document.querySelector("#add-button").addEventListener("click", (e) => {
    // debugger;
    // console.log("Add new shoe")
    // const contentCard = `
    // <div class="col-md-3">
    //         <div class="card">
    //           <img
    //             src=""
    //             class="card-img-top"
    //             alt="..."
    //           />
    //           <div class="card-body">
    //             <h5 class="card-title">Nike Wildhorse 7</h5>
    //             <p class="card-text">
    //               Take on those tough and extreme trail runs with the rugged build of the Nike Wildhorse 7. Confidently run rocky terrain with high-abrasion rubber on the outsole that adds durable traction. The upper delivers durable ventilation with support where you need it. Foam midsole cushioning gives a neutral feel and provides responsiveness on every mile.
    //             </p>
    //             <div>
    //               <button
    //                 type="button"
    //                 class="btn btn-primary"
    //                 data-bs-toggle="modal"
    //                 data-bs-target="#updateModal"
    //               >
    //                 Update
    //               </button>
    //               <button
    //                 type="button"
    //                 class="btn btn-primary"
    //                 data-bs-toggle="modal"
    //                 data-bs-target="#deleteModal"
    //               >
    //                 Delete
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    // `
   

    document.querySelector(".row").insertAdjacentHTML("beforeend", contentCard);
});