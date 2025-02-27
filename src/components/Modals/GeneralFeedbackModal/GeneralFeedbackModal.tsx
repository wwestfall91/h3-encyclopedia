import { useState } from "react";
import "./GeneralFeedbackModal.scss"
import emailjs from "@emailjs/browser";

type Props = {
  toggleShown?: (show: boolean) => void;
};

function GeneralFeedbackModal(props:Props) {
    const [feedback, setFeedback] = useState<string>("");

    const sendEmail = async (e: any) => {
        e.preventDefault();
        emailjs.sendForm(
            "service_6erwyck",
            "template_10i66hi",
            e.target,
            "2ZvCJk-Hb_M8fC5a8"
        );

        props.toggleShown!(false);
    };

    return (
        <form className="submit-modal-form" onSubmit={sendEmail}>
            <div id="GeneralFeedbackModal">
                    <div className="title">Submit Feedback</div>
                    <div className="input-selection">
                        <label>Type of Feedback</label>
                        <select name="type">
                            <option>New Feature Idea</option>
                            <option>Missing Content</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <textarea className="feedback-area" name="feedback" placeholder="What is your feedback?" onChange={(e) => setFeedback(e.target.value)}/>
                    <div className="reddit-username">
                        <label htmlFor="user">Reddit Username (Optional)</label>
                        <input name="user" placeholder="If I use the feedback, I'll give you a shoutout on my next Reddit Post!"
                    ></input>
                </div>
                <button className="submit-button" type="submit" disabled={feedback.length <= 0}>
                    Submit
                </button>
            </div>
        </form>
    );
}

export default GeneralFeedbackModal;