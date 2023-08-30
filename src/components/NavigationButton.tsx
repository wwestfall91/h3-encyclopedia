import { Link } from "react-router-dom";
import { Props } from "../App";

export function NavigationButton(props: Props) {
  return (
    <>
      <Link to={props.page.route}>
        <button className="button-53" role="button">
          {props.page.name}
        </button>
      </Link>
    </>
  );
}
