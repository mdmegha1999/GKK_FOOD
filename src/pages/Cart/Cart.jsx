import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

  // 🔹 Calculate subtotal
  const subtotal = food_list.reduce((acc, item) => {
    const quantity = cartItems[item.id] || 0;
    return acc + item.price * quantity;
  }, 0);

  // 🔹 Delivery fee (only if cart has items)
  const deliveryFee = subtotal > 0 ? 2 : 0;

  // 🔹 Final total
  const total = subtotal + deliveryFee;

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {food_list.map((item) => {
          const quantity = cartItems[item.id];
          if (quantity > 0) {
            return (
              <div key={item.id}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.img} alt={item.name} />
                  <p>{item.name}</p>
                  <p>${item.price.toFixed(2)}</p>
                  <p>{quantity}</p>
                  <p>${(item.price * quantity).toFixed(2)}</p>
                  <p onClick={() => removeFromCart(item.id)} className="cross">
                    X
                  </p>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-datails">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <hr />
            <div className="cart-total-datails">
              <p>Delivery Fee</p>
              <p>${deliveryFee.toFixed(2)}</p>
            </div>
            <hr />
            <div className="cart-total-datails">
              <b>Total</b>
              <b>${total.toFixed(2)}</b>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>

          <Link to="/#explore-menu">
            <button>CONTINUE SHOPPING</button>
          </Link>
        </div>

        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
