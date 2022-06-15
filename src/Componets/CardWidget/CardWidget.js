import React  from "react";
import { CartContext } from "../../Context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function CartWidget() {
  const {totalQuantity} = React.useContext(CartContext)

  return (
    <div className="cartWidget">
      <FontAwesomeIcon icon={faCartShopping} size="xl" />
      <span className="cartItems">
        {totalQuantity()}
      </span>
    </div>
  );
}
