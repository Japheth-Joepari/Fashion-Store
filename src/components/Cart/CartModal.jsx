import React from "react";

//component

const CartModal = () => {
  return (
    <div className="dropdown cart-dropdown">
      <a
        href="/"
        className="dropdown-toggle"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        data-display="static"
      >
        <i className="icon-shopping-cart"></i>
      </a>

      <div className="dropdown-menu dropdown-menu-right">
        <div className="dropdown-cart-products"></div>

        <div className="dropdown-cart-total">
          <span>Total</span>
        </div>
        <div className="dropdown-cart-action">
          <span>Log In to continue</span>
          <i className="icon-long-arrow-right"></i>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
