<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Boutique Caillou</title>
    <link rel="stylesheet" href="caillou.css">
</head>
<body>
    <header>
        <h1>Boutique Caillou</h1>
        <nav>
            <a href="#">Accueil</a>
            <a href="#">Produits</a>
            <a href="#">Panier</a>
        </nav>
    </header>
    
    <section class="products">
        <h2>Nos Produits</h2>
        <div class="product-list">
            <!-- Produit 1 -->
            <div class="product">
                <img src="C:\Users\grosh\Downloads/Snapchat-1610491998.jpg" alt="Produit 1">
                <h3>Magnifique pull caillou </h3>
                <p>Prix: 59,99€</p>
                <button class="add-to-cart" data-name="Produit 1" data-price="59.99">Ajouter au panier</button>
            </div>
            
            <!-- Produit 2 -->
            <div class="product">
                <img src="C:\Users\grosh\Downloads/Snapchat-2024172606.jpg" alt="Produit 2">
                <h3>Calbar caillou ultra sexy +1000 aura</h3>
                <p>Prix: 99,99€</p>
                <button class="add-to-cart" data-name="Produit 2" data-price="99.99">Ajouter au panier</button>
            </div>
        </div>
    </section>

    <section class="cart">
        <h2>Panier</h2>
        <ul id="cart-items">
            <!-- Les articles du panier apparaîtront ici -->
        </ul>
        <p>Total: <span id="total-price">0</span>€</p>
    </section>

    <script src="caillou.js"></script>
</body>
</html>
