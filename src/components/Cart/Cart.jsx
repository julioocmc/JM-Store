import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext';
import CartList from '../CartList/CartList';
import banner from './../../assets/img/Foto1.jpg';

function Cart() {
  const { cartList } = useContext(CartContext);

  return (
    <>
      <img src={banner} className="img-fluid"></img>
      {cartList.length === 0 ? (
        <div className="container mt-5">
          <div className="row text-center justify-content-center">
            <h3 className="my-5">
              <strong>Tu carrito está vacío en estos momentos.</strong>
            </h3>
            <h4 className="my-5">Selecciona tus productos.</h4>
            <Link
              className="btn bg-gradient w-25"
              style={{ backgroundColor: '#9CCC65' }}
              to="/"
            >
              Comprar!
            </Link>
          </div>
        </div>
      ) : (
        <CartList />
      )}
    </>
  );
}

export default Cart;
