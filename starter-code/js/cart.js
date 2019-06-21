/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {}

// done: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // done: Find the table body
  var node = table.getElementsByTagName('tbody')[0];
  // node.setAttribute('id', 'tableBody');
  console.log('node:', node); //terrible naming scheme!!!
  // console.log(cart.items.length);

  // done: Iterate over the items in the cart
  console.log('cart item name:', cart.items[0].product);
  // htmlNodeAdd('tr', node);
  for (let i = 0; i < cart.items.length; i++) {
    // done: Create a TR
    // DONE: Create a TD for the delete link, quantity,  and the item
    var trEl = document.createElement('tr');
    var tdRemove = document.createElement('td');
    var tdQuantityEl = document.createElement('td');
    var tdNameEl = document.createElement('td');
    var removeButton = document.createElement('button');

    removeButton.textContent = 'x';
    tdRemove.appendChild(removeButton);
    trEl.appendChild(tdRemove);
    tdQuantityEl.textContent = cart.items[i].quantity;
    trEl.appendChild(tdQuantityEl);
    tdNameEl.textContent = cart.items[i].product;
    trEl.appendChild(tdNameEl);

    // done: Add the TR to the TBODY and each of the TD's to the TR
    node.appendChild(trEl);
  }

 

}

function removeItemFromCart(event) {

  // done: When a delete link is clicked, use cart.removeItem to remove the correct item
  event.preventDefault();
  cart.removeItem(event.target);
  console.log(event.target);
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
