/* eslint-disable react/prop-types */
// import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { CartContext } from '../CartContext';
import { getProductData } from '../productsStore';

function CartProduct(props) {
  const cart = useContext(CartContext);
  const { id } = props;
  const { quantity } = props;
  const productData = getProductData(id);

  return (
    <>
      <h3 className="text-black">{productData.title}</h3>
      <p className="text-black">
        {quantity}
        {' '}
        total
      </p>
      <p className="text-black">
        $
        {(quantity * productData.price).toFixed(2)}
      </p>
      <div className="border-solid border-1 bg-[#C8A97E] px-8 py-1 self-center rounded-lg text-center">
        <button type="button" onClick={() => cart.deleteFromCart(id)}>
          Remove
        </button>
      </div>
      <hr />
    </>
  );
}

export default CartProduct;
