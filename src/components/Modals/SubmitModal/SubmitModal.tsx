import emailjs from "@emailjs/browser";
import "./SubmitModal.scss";
import { useState } from "react";
import React from "react";

type Props = {
  toggleShown: (show: boolean) => void;
  soundbite: boolean;
  modal?: React.ReactElement;
};

function SubmitModal(props: Props) {
  const [soundbiteName, setSoundbiteName] = useState<string>("");

  const sendEmail = async (e: any) => {
    e.preventDefault();

    if(props.soundbite){
      emailjs.sendForm(
        "service_6erwyck",
        "template_mxje4di",
        e.target,
        "2ZvCJk-Hb_M8fC5a8"
      );
    }
    else{
      emailjs.sendForm(
        "service_6erwyck",
        "template_50gsfg9",
        e.target,
        "2ZvCJk-Hb_M8fC5a8"
      );
    }

    props.toggleShown(false);
  };

  return (
    <div id="SubmitModal" onClick={() => props.toggleShown(false)}>
      <div className="submit-modal-container" onClick={(e) => { e.stopPropagation(); }} >
        {props.modal &&
          <> {React.cloneElement(props.modal, { toggleShown: props.toggleShown })} </>
        }
        {!props.modal &&
          <>
            <div className="submit-modal-title">
              {props.soundbite ? "REQUEST A SOUNDBITE TO BE ADDED" : "REQUEST A PERSON TO BE ADDED OR UPDATED"}
            </div>
            <form className="submit-modal-form" onSubmit={sendEmail}>
              <div className="input-container">
                <label htmlFor="soundbite">{props.soundbite ? "Soundbite Name*" : "Name*"}</label>
                <input
                  name="soundbite"
                  placeholder="Required"
                  onChange={(e) => setSoundbiteName(e.target.value)}
                ></input>
              </div>
              { props.soundbite &&
              <div className="input-container">
                <label htmlFor="soundbite">Who said it?</label>
                <input name="person" placeholder="Leave blank if unsure"></input>
              </div>
              }
              <div className="request-details-container">
                <label htmlFor="message">{props.soundbite ? "Additional Details" : "Request Details"}</label>
                <textarea
                  className="details-input"
                  name="message"
                  placeholder="Any additional information you feel I should know?"
                ></textarea>
              </div>
              <div className="input-container">
                <label htmlFor="user">Reddit Username (Optional)</label>
                <input name="user" placeholder="I'll shout you out on my next Reddit post if it gets added!" />
              </div>
              <button
                type="submit"
                className="submit-modal-submit-button"
                disabled={soundbiteName.length <= 0}
              >
                Submit
              </button>
            </form>
          </>
        }
        </div>
      </div>
  );
}

export default SubmitModal;
