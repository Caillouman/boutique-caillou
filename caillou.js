// caillou.js
let cartItems = [];
let totalPrice = 0;

// Fonction pour ajouter un article au panier
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.getAttribute('data-name');
        const productPrice = parseFloat(button.getAttribute('data-price'));

        // Ajouter l'article au tableau cartItems
        cartItems.push({ name: productName, price: productPrice });

        // Mettre à jour le prix total
        totalPrice += productPrice;

        // Afficher les articles et le prix dans le panier
        updateCartDisplay();
    });
});

function updateCartDisplay() {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';

    // Afficher chaque article dans le panier
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ${item.price}€`;
        cartList.appendChild(listItem);
    });

    // Mettre à jour le prix total
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}
