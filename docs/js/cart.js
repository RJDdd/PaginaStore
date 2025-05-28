// cart.js
export function addToCart(productId) {
  fetch('./products.json')
    .then(res => res.json())
    .then(products => {
      const product = products.find(p => p.id === productId);
      if (!product) return;

      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const existing = cart.find(p => p.id === productId);

      if (existing) {
        existing.quantity++;
      } else {
        cart.push({ id: product.id, name: product.name, price: product.price, quantity: 1 });
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      alert(`${product.name} añadido al carrito.`);
    });
}
