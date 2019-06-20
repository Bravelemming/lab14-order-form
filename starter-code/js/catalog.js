/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //DONE: Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  for (var i in Product.allProducts) {
    var optionEl = document.createElement('option');
    optionEl.textContent = Product.allProducts[i].name;
    selectElement.appendChild(optionEl);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // DONE: Prevent the page from reloading
  event.preventDefault();
  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// : Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // done: suss out the item picked from the select list
  var itemName = document.getElementById('items').value;
  // done: get the quantity
  var itemQuantity = parseInt(document.getElementById('quantity').value);
  // done: using those, add one item to the Cart
  cart.addItem(itemName, itemQuantity);
}

// done: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  //value for forms
  var itemQuantity = parseInt(document.getElementById('quantity').value);
  //textcontent for elements
  var liItemCount = parseInt(document.getElementById('itemCount').textContent);

  //check if its Nan, and set to zero if yes.
  if (isNaN(liItemCount)) {
    liItemCount = 0;
  }
  liItemCount += itemQuantity;
  //write out to span
  document.getElementById('itemCount').innerHTML = liItemCount;

}

// done: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {

  //target: cartContents

  // DONE: Get the item and quantity from the form
  var itemName = document.getElementById('items').value;
  var itemQuantity = parseInt(document.getElementById('quantity').value);

  // done: Add a new element to the cartContents div with that information
  var cartDiv = document.getElementById('cartContents');
  var createTableEl = document.createElement('table');
  var createTrEl = document.createElement('tr');
  var createTdElName = document.createElement('td');
  var createTdElValue = document.createElement('td');


  createTdElName.textContent = itemName;
  createTrEl.appendChild(createTdElName);
  

  createTdElValue.textContent = itemQuantity;
  createTrEl.appendChild(createTdElValue);
  
  createTableEl.appendChild(createTrEl);  
  cartDiv.appendChild(createTableEl);


}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
