import PageHeader from "../PageHeader/PageHeader";
import HeaderImage from "../../assets/images/H3 Sound Station.png";
import ButtonIncidents from "../../assets/images/ButtonIncidents.png";
import "./ButtonPage.scss";
import { useEffect, useState } from "react";
import { getLastButtonDate } from "../../database/LastButtonData";

function ButtonPage() {
  const [daysSinceLastButton, setDaysSinceLastButton] = useState<number>();

  useEffect(() => {
    calculateDays();
  }, []);

  const calculateDays = async () => {
    const lastButtonDateString = await getLastButtonDate();
    const lastButtonDate = new Date(lastButtonDateString as string);
    const today = new Date(Date.now());
    let diff = Math.abs(lastButtonDate.getTime() - today.getTime());
    let diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
    setDaysSinceLastButton(diffDays);
  };

  return (
    <div id="ButtonPage">
      <PageHeader image={""} class={"header-container purple"} />
      <div className="button-page-container">
        <div className="days-since-incident-container">
          <img
            src={ButtonIncidents}
            alt="Days since last button"
            className="button-incidents-image"
          />
          <div className="button-page-count">{daysSinceLastButton}</div>
        </div>
      </div>
    </div>
  );
}

export default ButtonPage;
