import { supabase } from './supabase.js';

export async function loadProducts(containerId, brand = null) {
  const container = document.getElementById(containerId);
  container.innerHTML = 'Cargando productos...';

  let query = supabase.from('products').select('*');

  if (brand) {
    query = query.eq('brand', brand);
  }

  const { data: products, error } = await query;

  if (error || !products) {
    container.innerHTML = '<p>Error al cargar productos.</p>';
    return;
  }

  if (products.length === 0) {
    container.innerHTML = '<p>No hay productos disponibles.</p>';
    return;
  }

  container.innerHTML = products.map(product => `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button onclick="location.href='product.html?id=${product.id}'">Ver más</button>
    </div>
  `).join('');
}
