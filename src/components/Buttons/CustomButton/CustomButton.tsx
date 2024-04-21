import { useNavigate } from "react-router-dom";
import { PageRoute } from "../../../models/PageRoute";
import "./CustomButton.scss";

export interface Props {
  page: PageRoute;
}

export function CustomButton(props: Props) {
  const navigate = useNavigate();

  return (
    <div id="CustomButton" onClick={() => navigate(props.page.route)}>
      <div className="custom-button-container">
        <div className="custom-button">
          <div className="custom-button-text">{props.page.name}</div>
        </div>
      </div>
    </div>
  );
}
