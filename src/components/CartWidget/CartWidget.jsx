import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
    return (
        <a className="nav-link" href="/cart">
            <FaShoppingCart size={25}/> <span className="cart-quantity" ></span>
        </a>
    );
};

export default CartWidget;
