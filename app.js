// VARIABLES
let form = document.querySelector(".form");
let input = document.querySelector(".input");
let groceryItem = document.querySelector(".grocery_item");
let clearBtn = document.querySelector(".clear_button");
let clearAlert = document.querySelector(".clear_alert");
let clearAlert2 = document.querySelector(".clear_alert_2");
let items = [];
let item;
let newGroceryItem;
let count = 0;
// MAIN

clearBtn.addEventListener("click", function (newGroceryItems) {
  newGroceryItems = document.querySelectorAll(".new");
  newGroceryItems.forEach(function (item) {
    item.remove();
  });
  if (newGroceryItems.length > 0) {
    clearAlert.style.display = "initial";
    setTimeout(function () {
      clearAlert.style.display = "none";
    }, 1000);
  } else {
    clearAlert2.style.display = "initial";
    setTimeout(function () {
      clearAlert2.style.display = "none";
    }, 1000);
  }
});

form.addEventListener(
  "submit",
  function (e, deleteButtons, checkButtons, newGroceryItem) {
    e.preventDefault();

    if (input.value !== "") {
      item = input.value;
      items.push(item);
      newGroceryItem = groceryItem.cloneNode(true);
      groceryItem.after(newGroceryItem);
      newGroceryItem.style.display = "flex";
      newGroceryItem.classList.add("new");
      newGroceryItem.children[0].innerHTML = items[count];
      let newGroceryItems = document.querySelectorAll(".new");

      count++;
    } else {
      alert("Please enter a grocery item");
    }

    input.value = "";

    deleteButtons = document.querySelectorAll(".delete_button");
    checkButtons = document.querySelectorAll(".check_button");

    checkButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (btn.parentElement.parentElement.classList.contains("cross_off")) {
          btn.parentElement.parentElement.classList.remove("cross_off");
        } else {
          btn.parentElement.parentElement.classList.add("cross_off");
        }
      });
    });

    deleteButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        btn.parentElement.parentElement.remove();
      });
    });
  }
);

// FUNCTIONS
