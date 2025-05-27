// main.js
import { loadProducts } from './products.js';

document.addEventListener('DOMContentLoaded', () => {
  loadProducts('product-container');
});

window.addToCart = function(productId) {
  // Lógica para añadir el producto al carrito
  console.log(`Producto con ID ${productId} añadido al carrito.`);
  // Aquí puedes implementar la lógica para almacenar el carrito en localStorage o en una variable global
};
