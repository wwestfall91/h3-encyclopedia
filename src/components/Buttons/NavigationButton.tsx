import { Link } from "react-router-dom";
import { PageRoute } from "../../models/PageRoute";
import "./Buttons.css";

export interface Props {
  page: PageRoute;
  buttonClass: string;
}

export function NavigationButton(props: Props) {
  return (
    <>
      <Link to={props.page.route}>
        <button className={props.buttonClass} role="button">
          {props.page.name}
        </button>
      </Link>
    </>
  );
}
