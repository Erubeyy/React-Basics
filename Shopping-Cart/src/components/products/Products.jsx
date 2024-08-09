import './Products.css';
import { AddToCartIcon, RemoveFromCartIcon } from '../Icons';
import { useCart } from '../../hooks/useCart';

const Products = ({ products }) => {
  const { addToCart, cart, removeFromCart } = useCart();

  const checkProductInCart = (productId) => {
    return cart.some(item => item.id === productId);
  }

  return (
    <main className='products'>
      <ul>
        {products.slice(0, 12).map(product => {
          const isProductInCart = checkProductInCart(product.id)
          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong>
              </div>
              <div style={{ color: '#646cff' }}>
                <strong>${product.price}</strong>
              </div>
              <div>
                <button style={{ backgroundColor: isProductInCart ? 'red' : 'green' }} onClick={() => {
                  isProductInCart
                    ? removeFromCart(product)
                    : addToCart(product)
                }}>
                  {
                    isProductInCart
                      ? <RemoveFromCartIcon />
                      : <AddToCartIcon />
                  }
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}

export default Products;