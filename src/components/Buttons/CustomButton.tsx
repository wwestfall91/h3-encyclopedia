import { useNavigate } from "react-router-dom";
import { PageRoute } from "../../models/PageRoute";
import "./CustomButton.css";

export interface Props {
  page: PageRoute;
}

export function CustomButton(props: Props) {
  const navigate = useNavigate();

  return (
    <div className="custom-button-container">
      <div className="custom-button" onClick={() => navigate(props.page.route)}>
        <div className="custom-button-text">{props.page.name}</div>
      </div>
    </div>
  );
}
