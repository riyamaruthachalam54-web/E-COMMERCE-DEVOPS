function addCart(product){

let cart = document.getElementById("cart")

let li = document.createElement("li")

li.innerText = product + " added to cart"

cart.appendChild(li)

}