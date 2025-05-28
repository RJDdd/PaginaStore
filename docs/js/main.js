import { loadProducts } from './products.js';

document.addEventListener('DOMContentLoaded', () => {
  loadProducts('product-container');

  // Toggle categorías
  const toggleBtn = document.getElementById('toggle-categories');
  const categoryList = document.getElementById('category-list');

  toggleBtn.addEventListener('click', () => {
    const isHidden = categoryList.classList.contains('hidden');
    if (isHidden) {
      categoryList.classList.remove('hidden');
    } else {
      categoryList.classList.add('hidden');
    }
  });
});

window.addToCart = function(productId) {
  console.log(`Producto con ID ${productId} añadido al carrito.`);
};