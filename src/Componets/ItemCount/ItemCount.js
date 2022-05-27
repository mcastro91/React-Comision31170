import React from "react";
import { Button, Col, Row } from "react-bootstrap";

export default function ItemCount({ stock, count, setCount, onAdd, onDecrease, text }) {

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
          <AddButton className="addButton" text={text} handleOnSubmit={onAdd} />
          <AddButton className="addButton" text="Eliminar del Carrito" handleOnSubmit={onDecrease} />
        </Col>
      </Row>
    </div>
  );
}

