/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import CartProduct from '../CartProduct';
import { CartContext } from '../../CartContext';

function CartModal({ show, handleClose }) {
  const cart = useContext(CartContext);

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0,
  );

  if (!show) {
    return null;
  }

  return (
    <div className="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center">
      <div className="fixed inset-0 transition-opacity">
        <div className="absolute inset-0 bg-gray-500 opacity-75" />
      </div>

      <div className="relative bg-white rounded-lg px-4 pt-5 pb-4 overflow-y-auto sm:max-w-lg sm:w-full sm:p-6">
        <div className="flex justify-between align-items-center place-items-center">
          <h3 className="text-3xl leading-6 font-medium text-gray-900">
            Shopping Cart
          </h3>
          <div className="mt-6 text-center sm:mt-6">
            <button
              type="button"
              className="text-3xl font-medium text-black hover:text-indigo-500 focus:outline-none focus:underline transition duration-150 ease-in-out"
              onClick={handleClose}
            >
              X
            </button>
          </div>
        </div>
        <div className="mt-6">
          {productsCount > 0 ? (
            <>
              <p className="text-xl">Items in your cart:</p>
              <div className="flex flex-col gap-2">
                {cart.items.map((currentProduct) => (
                  <CartProduct
                    key={currentProduct}
                    id={currentProduct.id}
                    quantity={currentProduct.quantity}
                  />
                ))}
              </div>

              <h1 className="my-4">
                Total:
                {' '}
                {cart.getTotalCost().toFixed(2)}
              </h1>

              <div className="border-solid border-1 bg-[#C8A97E] px-8 py-1 self-center rounded-lg text-center">
                <button type="button" className="text-black font-bold">
                  Purchase items!
                </button>
              </div>
            </>
          ) : (
            <h1>There are no items in your cart!</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartModal;
