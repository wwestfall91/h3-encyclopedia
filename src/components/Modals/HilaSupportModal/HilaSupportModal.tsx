import { useEffect } from "react";
import "./HilaSupportModal.scss";

export const HILA_SUPPORT_MODAL_STORAGE_KEY = "hila-support-modal-seen";

type Props = {
  onSupport: (button: HTMLButtonElement) => Promise<void>;
  onMessage: () => void;
  isDeparting: boolean;
  isLoadingCount: boolean;
  isSubmittingSupport: boolean;
  counterError: string | null;
};

function HilaSupportModal({
  onSupport,
  onMessage,
  isDeparting,
  isLoadingCount,
  isSubmittingSupport,
  counterError,
}: Props) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div id="HilaSupportModal" className={isDeparting ? "hila-modal-departing" : undefined}>
      <div className="hila-modal-container">
        <div className="hila-modal-icon">💔</div>

        <div className="hila-modal-body">
          <p>
            The past few days have been a rollercoaster of emotions. I think I speak for
            most of us when I say that this is the last thing I ever expected. For
            myself, Ethan and Hila's relationship was the end goal. It was a
            relationship I tried to mirror in my own. And this news has shattered me.
          </p>
          <p>
            The anger, the disappointment, the sadness that you feel, are worth feeling.
            Feel them. Dissect them. Vent about them. Bond over them. And most importantly, learn from them. 
            But don't let them turn you into someone you are not.
            I say this for you as much as I do for myself. As I've been processing all of all this, I've felt my mindset shifting towards a toxic one.
            The feelings of sorrow and anger turning into hatred and resentment. Quite frankly, it's been a mentally exhausting weekend.
            
          </p>
          <p>
            And so, I want to give us all an outlet that can turn that energy into something more positive.
          </p>
          <p>
            The reality is that what we are feeling is nothing compared to what Hila is going through right now, and I want give the opportunity for
            the community to support her outside of one-off Reddit posts and Discord messages. So, below are two options:
          </p>
          <ol>
            <li>
              <b>"I Support Hila"</b>. Click that button, and the counter will
              go up. This is an easy option for anyone to show their support.
            </li>
            <li>
              <b>"Love for Hila".</b> Click that button if you want to send a more personalized
              message to Hila with your love and support. These won't get sent to Hila directly, as I'll be reading and vetting out any hateful ones.
              But I will personally make sure the positive one's get to Hila so she can feel the support of this community.
            </li>
          </ol>
          <p>
            Either option will add to the counter, so don't fret if you send a message. There's also a button on the homepage that you can click to send a message anytime if you want some time to think about your message.
          </p>
        </div>
        <div>
          <div>Anyway, ✌❤, ✌❤</div>
          <div><i><center>WaddlesJr</center></i></div>
        </div>

        <div className="hila-modal-actions">
          <button
            type="button"
            className="hila-modal-button hila-modal-support"
            onClick={(event) => void onSupport(event.currentTarget)}
            disabled={isLoadingCount || isSubmittingSupport || isDeparting}
          >
            {isSubmittingSupport ? "Adding your support..." : "✌ I Support Hila"}
          </button>
          <button type="button" className="hila-modal-button hila-modal-message" onClick={onMessage} disabled={isSubmittingSupport || isDeparting}>
            💌 Love for Hila
          </button>
        </div>

        {counterError && (
          <div className="hila-modal-error" role="alert">
            {counterError}
          </div>
        )}
      </div>
    </div>
  );
}

export default HilaSupportModal;
