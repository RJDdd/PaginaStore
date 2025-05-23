let cart = JSON.parse(localStorage.getItem('cart')) || [];

export function addToCart(productId, quantity = 1) {
  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ id: productId, quantity });
  }

  updateCart();
}

export function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  updateCart();
}

function updateCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartUI();
  updateCartCounter();
}

function updateCartCounter() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll('.cart-counter').forEach((el) => {
    el.textContent = count;
  });
}

function updateCartUI() {
  // Implementar la actualización visual del carrito
}

// Inicializar el contador del carrito al cargar la página
document.addEventListener('DOMContentLoaded', updateCartCounter);
