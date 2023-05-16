// ProductCard Component
function ProductCard({ product, handleAddToCart }) {
    return (
      <div className="product-card">
        <img src={product.imageUrl} alt={product.name} />
        <h2>{product.name}</h2>
        <p>${product.price.toFixed(2)}</p>
        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
      </div>
    );
  }
  
  // ShoppingCart Component
  function ShoppingCart({ cartItems, handleRemoveFromCart }) {
    return (
      <div className="shopping-cart">
        <h1>Shopping Cart</h1>
        {cartItems.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            handleAddToCart={() => handleRemoveFromCart(product.id)} 
          />
        ))}
        <button onClick={checkout}>Checkout</button>
      </div>
    );
  }
  