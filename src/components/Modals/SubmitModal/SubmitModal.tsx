import emailjs from "@emailjs/browser";
import "./SubmitModal.scss";
import { useState } from "react";

type Props = {
  toggleShown: (show: boolean) => void;
};

function SubmitModal(props: Props) {
  const [soundbiteName, setSoundbiteName] = useState<string>("");

  const sendEmail = async (e: any) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_6erwyck",
      "template_mxje4di",
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
          REQUEST A SOUNDBITE TO BE ADDED
        </div>
        <form className="submit-modal-form" onSubmit={sendEmail}>
          <div className="submit-modal-form-input">
            <label htmlFor="soundbite">Soundbite Name*</label>
            <input
              name="soundbite"
              onChange={(e) => setSoundbiteName(e.target.value)}
            ></input>
          </div>
          <div className="submit-modal-form-input">
            <label htmlFor="soundbite">Who said it?</label>
            <input name="person"></input>
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
              placeholder="I'll inform you if the soundbite gets added!"
              onChange={(e) => setSoundbiteName(e.target.value)}
            ></input>
          </div>
          <button
            type="submit"
            className="submit-modal-submit-button"
            disabled={soundbiteName.length <= 0}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default SubmitModal;
