import { useEffect } from "react";
import "./Oliver3TributeModal.scss";

const STORAGE_KEY = "oliver3-tribute-seen";

type Props = {
  onClose: () => void;
};

function Oliver3TributeModal({ onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const handleClose = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    onClose();
  };

  return (
    <div id="Oliver3TributeModal" onClick={handleClose}>
      <div className="tribute-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="tribute-modal-icon">❤</div>
        <p className="tribute-modal-body">
          Please join me this break by remembering Oliver Tree. Every weekday at 1PM PST
          I'll be posting a new episode where Oliver was a guest, either in studio or
          calling in. I'll be posting them in chronological order so we can watch how he
          and the podcast's comedy evolved over the years.
          <br></br>
          <br></br>
          Rest in peace, Oliver. You will be missed, but never forgotten.
        </p>
        <button className="tribute-modal-close" onClick={handleClose}>
          I'll be there
        </button>
      </div>
    </div>
  );
}

export { STORAGE_KEY as OLIVER3_TRIBUTE_STORAGE_KEY };
export default Oliver3TributeModal;
