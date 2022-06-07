import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function CartCount({ stock, count, setCount, removeFromCart, removeQuantity, addQuantity}) {

  
  const addCount = () => {
    if (count < stock) {
      setCount(count + 1);
      addQuantity()
    }
  };

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1)
      removeQuantity()
    }
  };

  const StockButton = ({ handleOnClick, text }) => {
    return <span className="cartStockButton" onClick={() => handleOnClick()}>{text}</span>;
  };

  const DeleteButton = ({ handleOnSubmit}) => {
    return <FontAwesomeIcon  className="cartDeleteButton" icon={faTrashCan} onClick={() => handleOnSubmit()} />
  };
  
  return (
    <div className="cartCount">
      <StockButton text="-" handleOnClick={decreaseCount} />
      <span className="count">{count}</span>
      <StockButton text="+" handleOnClick={addCount} />
      <DeleteButton handleOnSubmit={removeFromCart} />
    </div>
  );
}

