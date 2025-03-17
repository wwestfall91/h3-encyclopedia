import { useNavigate } from "react-router-dom";
import { PageRoute } from "../../../models/PageRoute";
import "./CustomButton.scss";

export interface Props {
  page: PageRoute;
  onClick?: () => void; 
}

export function CustomButton(props: Props) {
  const navigate = useNavigate();

  return (
    <div id="CustomButton" onClick={() => {navigate(props.page.route); props.onClick ? props.onClick() : () => {}}}>
      <div className="custom-button-container">
        {props.page.name}
      </div>
    </div>
  );
}
