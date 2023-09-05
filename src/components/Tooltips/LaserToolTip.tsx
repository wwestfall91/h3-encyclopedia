import ResponsiveModal from "../Modals/ResponsiveModal";
import "./LaserToolTip.css";

function LaserToolTip() {
  return (
    <>
      <div className="item-hints">
        <div className="hint" data-position="4">
          <ResponsiveModal title="Peace & Love" />
          <div className="hint-content do--split-children">
            <p>
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LaserToolTip;
