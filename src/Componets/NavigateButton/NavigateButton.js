import {useNavigate} from "react-router-dom";
import { Button } from "react-bootstrap";

export default function NavigateButton({text, path}) {
  const navigate = useNavigate();
  return (
    <Button className="btn-success navigateButton" onClick={() => navigate(path)}>{text}</Button>
  )
}