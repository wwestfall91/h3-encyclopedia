import "./SoundbiteList.css";
import { Soundbite } from "../../models/Soundbite";
import SoundbiteCard from "./SoundbiteCard";

interface Props {
  soundbite: Soundbite;
  image: string;
}

function SoundbiteList(props: Props) {
  return <SoundbiteCard soundbite={props.soundbite} image={props.image} />;
}

export default SoundbiteList;
