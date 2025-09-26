// Day 28: Project 5 - E-Commerce Website


// Tasks/Activities:(No need to use database , you can use json fiels or just an array to simulate database)

// Activity 1: Setting up the project
// Task 1: Initialize a new project directory and set up the basic structure for the e-commerce website
// Task 2: Add a basics CSS file to style the e-commerce website , including a produc listing grid and a shopping cart sections

// Activity 2: product Listing
// Task 3: Create a JSON  file or an array of production objects with details like name , price desciprtion and image URL
// Task 4: Write a script to dynamically generate the product listning from the product data and display it on the web page style the product cards using css

function displayProducts() {
	fetch('products.json').
	then(response =>{
		if(!response.ok) {
			throw new Error('Network response was not ok');
		}
		return response.json();
	}).then(data=>{
		const productContainer = document.getElementById('product-container');
		productContainer.innerHTML = ''; // Clear the container
	
		data.forEach(product => {
			// Create the product card
			const productCard = document.createElement('div');
			productCard.className = 'product-card';
	
			// Set the inner HTML of the product card
			productCard.innerHTML = `
				<img src="${product.imageUrl}" alt="${product.name}">
				<h2>${product.name}</h2>
				<p class="price">$${product.price}</p>
				<p>${product.description}</p>
				<button>Add to Cart</button>
			`;
	
			// Append the product card to the container
			productContainer.appendChild(productCard);
		});
	
	}).catch(error=>{
		console.log('There was a problem with the fetch operation:',error);
	})
}

// Call the function to display products on page load
displayProducts();
// Activity 3: Shopping Cart
// Task 5: Add an "Add to Cart" button to each product card write a function to handle adding products to the shopping cart
const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
addToCartButtons.forEach(button => {
	button.addEventListener('click', (e) => {
		const productId = parseInt(e.target.getAttribute('data-product-id'));
		const product = products.find(prod => prod.id === productId);
		addToCart(product);
	});
});


function addToCart(product) {
const existingProduct = shoppingCart.find(item => item.id === product.id);

if (existingProduct) {
	existingProduct.quantity += 1;
} else {
	shoppingCart.push({ ...product, quantity: 1 });
}

updateCartDisplay();
}

// Task 6: Create a shopping cart section that display the products added to the cart, including the name , price and quantity .Update the cart display whenever a product is added

function updateCartDisplay() {
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
cartItems.innerHTML = ''; // Clear the cart items

let total = 0;

shoppingCart.forEach(item => {
	const cartItem = document.createElement('li');
	cartItem.innerHTML = `
		${item.name} - $${item.price} x ${item.quantity}
	`;
	cartItems.appendChild(cartItem);

	total += item.price * item.quantity;
});

cartTotal.textContent = total.toFixed(2);
}

// Activity 4: Cart Management
// Task 7: Add functionality to update the quantity of products in the cart write a function to habdle increaing and decreasing the quantity of items
// Task 8: Add a "Remove" button to each item in the cart write a function to handle removing products from the cart and updating the display

// Activity 5:Checkout process
// Task 9: Create a checkout from that collect user information (e.g, name , address , payment , details) style the form using CSS
// Task 10: Write a function to handle from submission the checkout process . Display a confirmation message with the order details
