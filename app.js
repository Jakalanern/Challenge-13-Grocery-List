// VARIABLES
let form = document.querySelector(".form");
let input = document.querySelector(".input");
let groceryItem = document.querySelector(".grocery_item");
let clearBtn = document.querySelector(".clear_button");
let clearAlert = document.querySelector(".clear_alert");
let clearAlert2 = document.querySelector(".clear_alert_2");
let inputAlert = document.querySelector(".input_alert");
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
    clearAlertOne();
  } else {
    clearAlertTwo();
  }
});

form.addEventListener(
  "submit",
  function (e, deleteButtons, checkButtons, newGroceryItem) {
    e.preventDefault();

    if (input.value !== "") {
      item = input.value;
      items.push(item);
      itemInputAlert(item);
      newGroceryItem = groceryItem.cloneNode(true);
      groceryItem.after(newGroceryItem);
      newGroceryItem.style.display = "flex";
      newGroceryItem.classList.add("new");
      newGroceryItem.children[0].innerHTML = items[count];
      let newGroceryItems = document.querySelectorAll(".new");

      count++;
    } else {
      item = "";
      itemInputAlert(item);
    }

    input.value = "";

    deleteButtons = document.querySelectorAll(".delete_button");

    deleteButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        btn.parentElement.parentElement.remove();
        let itemName = `-- ${btn.parentElement.parentElement.children[0].innerHTML} Has Been Deleted --`;
        deleteItemAlert(itemName);
      });
    });
  }
);

// FUNCTIONS

function itemInputAlert(item) {
  if (input.value !== "") {
    inputAlert.innerHTML = `-- ${item} Has Been Added To The List --`;
    inputAlert.style.display = "initial";
    inputAlert.style.color = "lime-green";
    setTimeout(function () {
      inputAlert.style.display = "none";
    }, 750);
  } else if (input.value === "") {
    inputAlert.innerHTML = `-- Please Enter A Grocery Item --`;
    inputAlert.style.display = "initial";
    inputAlert.style.color = "red";
    setTimeout(function () {
      inputAlert.style.display = "none";
    }, 750);
  }
}

function deleteItemAlert(itemName) {
  clearAlert.innerHTML = itemName;
  clearAlert.style.color = "red";
  clearAlertOne();
}

function clearAlertOne() {
  clearAlert.style.display = "initial";
  clearAlert.style.color = "lime-green";

  setTimeout(function () {
    clearAlert.style.display = "none";
  }, 1000);
}

function clearAlertTwo() {
  clearAlert2.style.display = "initial";
  clearAlert2.style.color = "lime-green";
  setTimeout(function () {
    clearAlert2.style.display = "none";
  }, 1000);
}
