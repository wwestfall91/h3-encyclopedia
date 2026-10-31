import emailjs from "@emailjs/browser";
import { FormEvent, useState } from "react";
import "./HilaMessageModal.scss";

type Props = {
  toggleShown?: (show: boolean) => void;
};

function HilaMessageModal({ toggleShown }: Props) {
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);
    setSendError(null);

    try {
      await emailjs.sendForm(
        "service_6erwyck",
        "template_10i66hi",
        event.currentTarget,
        "2ZvCJk-Hb_M8fC5a8"
      );

      toggleShown?.(false);
    } catch (error) {
      console.error("Unable to send message to Hila:", error);
      setSendError("Your message could not be sent. Please try again.");
      setIsSending(false);
    }
  };

  return (
    <form className="hila-message-modal-form" onSubmit={sendEmail}>
      <div id="HilaMessageModal">
        <div className="title">Message to Hila</div>
        <input type="hidden" name="type" value="Message to Hila" />

        <div className="field-group">
          <label htmlFor="user">Name (Optional)</label>
          <input
            id="user"
            name="user"
          />
        </div>

        <div className="field-group">
          <label htmlFor="message">Your message</label>
          <textarea
            id="message"
            className="message-area"
            name="feedback"
            placeholder="Write a message to Hila..."
            maxLength={10000}
            required
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        {sendError && <div className="send-error" role="alert">{sendError}</div>}

        <button
          className="submit-button"
          type="submit"
          disabled={message.trim().length <= 0 || isSending}
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}

export default HilaMessageModal;
