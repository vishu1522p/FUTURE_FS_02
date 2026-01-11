let total = 0;
let cart = document.getElementById("cart");
let totalDisplay = document.getElementById("total");

function addToCart(name, price) {
    let item = document.createElement("li");
    item.textContent = name + " - ₹" + price;
    cart.appendChild(item);

    total += price;
    totalDisplay.textContent = total;
}

function checkout(event) {
    event.preventDefault();
    alert("Order placed successfully!");
    cart.innerHTML = "";
    total = 0;
    totalDisplay.textContent = total;
}
