export async function loadProducts(containerId, brand) {
  const container = document.getElementById(containerId);
  container.innerHTML = 'Cargando productos...';

  try {
    const response = await fetch('./products.json');
    const products = await response.json();

    const filtered = brand ? products.filter(p => p.brand === brand) : products;


    if (filtered.length === 0) {
      container.innerHTML = '<p>No hay productos disponibles para esta marca.</p>';
      return;
    }

    container.innerHTML = filtered.map(product => `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>Precio: $${product.price}</p>
        <p>Stock: ${product.stock > 0 ? product.stock : 'Agotado'}</p>
        <button ${product.stock === 0 ? 'disabled' : ''} onclick="addToCart(${product.id})">Añadir al carrito</button>
      </div>
    `).join('');
  } catch (error) {
    console.error('Error cargando productos:', error);
    container.innerHTML = '<p>Error al cargar productos.</p>';
  }
}
