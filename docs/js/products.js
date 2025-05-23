import { getProductsByBrand } from './js/products.js';

document.addEventListener('DOMContentLoaded', async () => {
  const products = await getProductsByBrand('Bandai');
  const container = document.getElementById('product-list');
  container.innerHTML = products.map(product => `
    <div class="product-card">
      <img src="${product.image_url}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <a href="product.html?id=${product.id}">Ver más</a>
    </div>
  `).join('');
});
