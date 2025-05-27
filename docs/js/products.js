import { supabase } from './supabase.js';

export async function loadProducts(containerId, brand = null) {
  const container = document.getElementById(containerId);
  container.innerHTML = 'Cargando productos...';

  let query = supabase.from('productos').select('*');

  if (brand) {
    query = query.eq('categoria', brand); // "categoria" es tu campo, no "brand"
  }

  const { data: products, error } = await query;

  if (error || !products) {
    console.error(error);
    container.innerHTML = '<p>Error al cargar productos.</p>';
    return;
  }

  if (products.length === 0) {
    container.innerHTML = '<p>No hay productos disponibles.</p>';
    return;
  }

  container.innerHTML = products.map(product => `
    <div class="product-card">
      <img src="${product.imagen || 'images/default.jpg'}" alt="${product.nombre}" />
      <h3>${product.nombre}</h3>
      <p>$${product.precio}</p>
      <button onclick="location.href='product.html?id=${product.id}'">Ver más</button>
    </div>
  `).join('');
}
