import { supabase } from './supabase.js';

export async function loadProducts(containerId, brand = null) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`No se encontró el contenedor con id "${containerId}"`);
    return;
  }

  container.innerHTML = 'Cargando productos...';

  // Construir la consulta
  let query = supabase.from('products').select('*');
  if (brand) {
    query = query.eq('brand', brand);
  }

  // Ejecutar la consulta
  const { data: products, error } = await query;

  // Debug en consola
  console.log('Productos:', products);
  console.log('Error:', error);

  // Validar respuesta
  if (error || !products) {
    container.innerHTML = '<p>Error al cargar productos.</p>';
    return;
  }

  if (products.length === 0) {
    container.innerHTML = '<p>No hay productos disponibles.</p>';
    return;
  }

  // Renderizar productos
  container.innerHTML = products.map(product => `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button onclick="location.href='product.html?id=${product.id}'">Ver más</button>
    </div>
  `).join('');
}
