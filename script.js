// Selecciona elementos del DOM
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');

let cart = []; // Array para almacenar productos

// Función para añadir un producto al carrito
function addToCart(event) {
  const button = event.target;
  const name = button.dataset.name;
  const price = parseFloat(button.dataset.price);

  // Añadir producto al carrito
  cart.push({ name, price });

  // Actualizar el carrito
  updateCart();
}

// Función para actualizar el carrito
function updateCart() {
  // Limpiar el carrito actual
  cartItems.innerHTML = '';

  // Mostrar productos en el carrito
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Eliminar';
    removeButton.onclick = () => removeFromCart(index);
    li.appendChild(removeButton);
    cartItems.appendChild(li);
  });

  // Calcular el total
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  cartTotal.textContent = total.toFixed(2);
}

// Función para eliminar un producto del carrito
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

// Añadir eventos a los botones
addToCartButtons.forEach(button => button.addEventListener('click', addToCart));
