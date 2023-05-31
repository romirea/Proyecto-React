import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
    return (
        <a className="nav-link" href="#">
            <FaShoppingCart size={25}/> <span className="cart-quantity">3</span>
        </a>
    );
};

export default CartWidget;
