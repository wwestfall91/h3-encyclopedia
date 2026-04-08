import { useEffect, useState } from "react";
import { CustomButton } from "../../components/Buttons/CustomButton/CustomButton";
import Page from "../../models/enums/Page";
import { useLocation } from "react-router-dom";
import "./PageHeader.scss";

function PageHeader() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [image, setImage] = useState("Images/NewHomepageLogo.png");
  const [colorStyle, setColorStyle] = useState("purple");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    handleResize(); // Check on initial render
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize); // Clean up
  }, []);

  useEffect(() => {
    getPageHeader();
  }, [location.pathname]);

  function getPageHeader(){
    if(location.pathname == ("/")){
      setImage("Images/NewHomepageLogo.png")
      setColorStyle("purple")
    }

    if(location.pathname == ("/soundbites")){
      setImage("Images/NewH3SoundStation.png")
      setColorStyle("purple")
    }

    if(location.pathname == ("/Iceberg")){
      setImage("Images/H3IcebergNew.png")
      setColorStyle("blue")
    }

    if(location.pathname == "/Crew"){
      setImage("Images/TheH3Crew.png")
      setColorStyle("purple")
    }

    if(location.pathname == "/Button"){
      setImage(undefined!)
      setColorStyle("purple")
    }

    if(location.pathname == "/People"){
      setImage("Images/NewFriendsEnemies.png")
      setColorStyle("white")
    }
  }

  return (
    <>
      <div id="PageHeader">
        {!isMobile &&
          <div className={`header ${colorStyle}`}>
            <img className="site-logo" src={image}></img>
            <div className="right-header">
              <CustomButton page={Page.Homepage} />
              <CustomButton page={Page.Soundbites} />
              <CustomButton page={Page.Iceberg} />
              <CustomButton page={Page.Crew} />
              <CustomButton page={Page.Button} />
              <CustomButton page={Page.People} />
              <div id="CustomButton" onClick={() => window.open(`https://snarkbrain.com/articles/`)}>
                <div className="custom-button-container">
                  Snark Brain
                </div>
                <div className="snark-brain">
                  🧠
                </div>
              </div>
            </div>
          </div>
        }
        {isMobile &&
        <div className={`header ${colorStyle}`}>
          <div style={navStyle}>
            {/* Hamburger Button */}
            <button onClick={() => setIsOpen(!isOpen)} style={hamburgerStyle}>
              <div style={{ ...lineStyle, transform: isOpen ? "rotate(45deg) translateY(11px)" : "none" }} />
              <div style={{ ...lineStyle, opacity: isOpen ? 0 : 1 }} />
              <div style={{ ...lineStyle, transform: isOpen ? "rotate(-45deg) translateY(-11px)" : "none" }} />
            </button>


          </div>
        </div>
        }
      </div>
      <>
        { isOpen &&
          <ul style={{ ...menuStyle, height: isOpen ? "300px" : "0", width: isOpen ? "200px" : "0" }}>
            <CustomButton page={Page.Homepage} onClick={() => setIsOpen(false)} />
            <CustomButton page={Page.Soundbites} onClick={() => setIsOpen(false)} />
            <CustomButton page={Page.Iceberg} onClick={() => setIsOpen(false)} />
            <CustomButton page={Page.Crew} onClick={() => setIsOpen(false)} />
            <CustomButton page={Page.Button} onClick={() => setIsOpen(false)} />
            <CustomButton page={Page.People} onClick={() => setIsOpen(false)} />
          </ul>
        }
      </>
    </>
  );
}

// Styles (Left-Aligned Menu)
const navStyle: React.CSSProperties = {
  position: "relative",
  width: "200px"
};

const hamburgerStyle: React.CSSProperties = {
  background: "none",
  border: "none",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  gap: "5px",
  padding: "10px",
};

const lineStyle: React.CSSProperties = {
  width: "30px",
  height: "3px",
  backgroundColor: "#333",
  transition: "all 0.3s ease-in-out"
};

const menuStyle: React.CSSProperties = {
  display:"flex",
  position: "fixed",
  flexDirection:"column",
  backgroundColor: "white",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px",
  borderRadius: "5px",
  marginLeft:"50px",
  marginTop:"25px",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  zIndex:"1000"
};

export default PageHeader;
