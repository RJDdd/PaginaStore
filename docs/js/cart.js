// js/cart.js
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.add-to-cart');

  // Cargar productos del JSON si aún no están cargados en localStorage
  fetch('products.json')
    .then(res => res.json())
    .then(products => {
      buttons.forEach(button => {
        button.addEventListener('click', () => {
          const id = parseInt(button.dataset.id);
          const product = products.find(p => p.id === id);
          if (!product || product.stock <= 0) {
            alert("Este producto está agotado.");
            return;
          }

          // Obtener carrito desde localStorage
          let cart = JSON.parse(localStorage.getItem('cart')) || [];

          // Verificar si el producto ya está en el carrito
          const itemInCart = cart.find(item => item.id === id);
          if (itemInCart) {
            if (itemInCart.quantity < product.stock) {
              itemInCart.quantity += 1;
              updateStockDisplay(id, product.stock - itemInCart.quantity);
            } else {
              alert("No hay más unidades disponibles.");
              return;
            }
          } else {
            cart.push({
              id: product.id,
              name: product.name,
              price: product.price,
              quantity: 1
            });
            updateStockDisplay(id, product.stock - 1);
          }

          // Guardar carrito actualizado
          localStorage.setItem('cart', JSON.stringify(cart));
          console.log(`Añadido ${product.name} al carrito.`);
        });
      });
    });

  function updateStockDisplay(id, newStock) {
    const stockElement = document.getElementById(`stock-${id}`);
    if (stockElement) {
      stockElement.textContent = `Stock: ${newStock}`;
    }
  }
});
