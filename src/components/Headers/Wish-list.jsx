import React from "react";

const WishList = () => {
  return (
    <div className="dropdown cart-dropdown">
      <a href="#" class="dropdown-toggle" role="button">
        <i class="icon-heart-o" style={{ fontSize: "0.75em" }}>
          {" "}
        </i>
        <span className="cart-count">{1}</span>
        <span className="wishlist-txt">Saved Items</span>
      </a>
    </div>
  );
};

export default WishList;
