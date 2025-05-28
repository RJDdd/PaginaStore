// js/products.js
export async function loadProducts(containerId, brandFilter) {
  const res = await fetch('products.json');
  const products = await res.json();
  const container = document.getElementById(containerId);

  // Limpiar contenido previo
  container.innerHTML = '';

  products
    .filter(p => !brandFilter || p.brand.toLowerCase() === brandFilter.toLowerCase())
    .forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';

      const stockText = product.stock > 0 ? `Stock: ${product.stock}` : 'Agotado';
      const disabledAttr = product.stock > 0 ? '' : 'disabled';

      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image"/>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-price">$${product.price}</p>
        <p class="product-stock" id="stock-${product.id}">${stockText}</p>
        <button class="add-to-cart-btn" data-id="${product.id}" ${disabledAttr}>Añadir al carrito</button>
      `;

      container.appendChild(card);
    });

  // Activar botones después de generar los productos
  activateCartButtons(products);
}

function activateCartButtons(products) {
  const buttons = document.querySelectorAll('.add-to-cart-btn');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const id = parseInt(button.dataset.id);
      const product = products.find(p => p.id === id);
      if (!product || product.stock <= 0) {
        alert('Producto agotado.');
        return;
      }

      // Leer carrito actual
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      const itemInCart = cart.find(item => item.id === id);

      // Control de cantidad
      if (itemInCart) {
        if (itemInCart.quantity < product.stock) {
          itemInCart.quantity += 1;
        } else {
          alert('No hay más unidades disponibles.');
          return;
        }
      } else {
        cart.push({ id: product.id, name: product.name, price: product.price, quantity: 1 });
      }

      // Guardar carrito
      localStorage.setItem('cart', JSON.stringify(cart));

      // Actualizar stock en pantalla
      const quantityInCart = itemInCart ? itemInCart.quantity : 1;
      const newStock = product.stock - quantityInCart;
      const stockElement = document.getElementById(`stock-${product.id}`);
      if (stockElement) {
        stockElement.textContent = newStock > 0 ? `Stock: ${newStock}` : 'Agotado';
      }

      // Desactivar botón si se agota
      if (newStock <= 0) {
        button.disabled = true;
      }
    });
  });
}
