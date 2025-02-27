import emailjs from "@emailjs/browser";
import "./RequestCrewMomentModal.scss";
import { useState } from "react";

type Props = {
  toggleShown: (show: boolean) => void;
  crewMember: string;
};

function RequestCrewMomentModal(props: Props) {
  const [description, setDescription] = useState<string>("");

  const sendEmail = async (e: any) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_6erwyck",
      "template_jk9m25b",
      e.target,
      "2ZvCJk-Hb_M8fC5a8"
    );
    props.toggleShown(false);
  };

  return (
    <div id="SubmitModal" onClick={() => props.toggleShown(false)}>
      <div
        className="submit-modal-container"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="submit-modal-title">
          REQUEST A CREW MOMENT TO BE ADDED
        </div>
        <form className="submit-modal-form" onSubmit={sendEmail}>
          <div className="submit-modal-form-input">
            <label htmlFor="soundbite">Crew Member*</label>
            <select name="crewMember">
              <option selected={props.crewMember == "Dan"} value="Dan">Dan</option>
              <option selected={props.crewMember == "Zach"} value="Zach">Zach</option>
              <option selected={props.crewMember == "Love"} value="Love">Love</option>
              <option selected={props.crewMember == "Ian"} value="Ian">Ian</option>
            </select>
          </div>
          <div className="submit-modal-form-input">
            <label htmlFor="message">Describe the moment</label>
            <textarea
              name="description"
              placeholder="Describe the moment with as much detail as possible"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="submit-modal-form-input">
            <label htmlFor="message">Additional Details</label>
            <textarea
              name="message"
              placeholder="Anything additional I should know to help me find it?"
            ></textarea>
          </div>
          <div className="submit-modal-form-input">
            <label htmlFor="soundbite">Reddit Username</label>
            <input
              name="user"
              placeholder="I'll inform you if the moment gets added!"
            ></input>
          </div>
          <button
            type="submit"
            className="submit-modal-submit-button"
            disabled={description.length <= 0}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default RequestCrewMomentModal;
