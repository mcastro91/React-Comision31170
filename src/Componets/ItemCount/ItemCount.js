import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ItemCount({ stock, count, setCount, onAdd, isInCart }) {

  const navigate = useNavigate()

  const addCount = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  };
  console.log(isInCart)

  const StockButton = ({ handleOnClick, text }) => {
    return <Button className="stockButton" onClick={() => handleOnClick()}>{text}</Button>;
  };

  const AddButton = ({ handleOnSubmit, text }) => {
    return <Button className="addButton" onClick={() => handleOnSubmit()}> {text} </Button>;
  };

  return (
    <div className="itemCount">
      <StockButton text="-" handleOnClick={decreaseCount} />
      <span className="count">{count}</span>
      <StockButton text="+" handleOnClick={addCount} />
      <Row>
        <Col>
          {isInCart ? (<AddButton text="Añadir al carrito" handleOnSubmit={onAdd} />) : (<AddButton text=" Ir al carrito" handleOnSubmit={() => navigate("/cart")} />)}
        </Col>
      </Row>
    </div>
  );
}

