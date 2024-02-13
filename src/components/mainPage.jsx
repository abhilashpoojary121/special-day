import React, { useState, useEffect } from "react";
import "./style.css";
import flower from "../images/flower.png";
import sad from "../images/sad.png";
import happy from "../images/happy.png";
const MainPage = () => {
  const [noBtnValue, setNoBtnValue] = useState("No");
  const [isNoDisabled, setIsNoDisabled] = useState(false);
  const [isYesClicked, setIsYesClicked] = useState(false);
  const [counter, setCounter] = useState(0);
  const noList = [
    { key: 1, value: "Must be a misclick, try again" },
    {
      key: 2,
      value: "Ouch 💔, that hurt. Must have misclicked again, try again.",
    },
    { key: 3, value: "How could you 🥹? Please think again" },
    { key: 4, value: "Maybe reconsider once again 🥹👉👈" },
    {
      key: 5,
      value: "You are breaking my heart now 😭💔. Last chance think again.",
    },
  ];
  useEffect(() => {
    handleNo();
  }, []);

  const handleYes = () => {
    setIsYesClicked(true);
    setIsNoDisabled(true);
  };
  const handleNo = () => {
    setCounter(counter + 1);
    if (counter < 7) {
      noList.map((element) => {
        if (element.key === counter) {
          setNoBtnValue(element.value);
        }
      });
    } else {
      setIsNoDisabled(true);
      setNoBtnValue("😈");
    }
  };
  return (
    <div id="main">
      <div id="container" className={isYesClicked && "gif-container"}>
        {isYesClicked ? (
          <img
            className="fade-out"
            src={happy}
            width={"200px"}
            height={"200px"}
            style={{ margin: "20px" }}
          />
        ) : (
          <img
            src={counter <= 2 ? flower : sad}
            width={"200px"}
            height={"200px"}
            style={{ margin: "20px" }}
          />
        )}
        {isYesClicked ? (
          <>
            <h2 style={{ textAlign: "center" }}>
              {counter > 1
                ? "Yayyyy I knew it you would say yes🤭🙈🩷"
                : "Yayyyyyyyyyyyyy🙈🩷🩷"}
            </h2>
          </>
        ) : (
          <h2 style={{ textAlign: "center" }}>Will you be my valentine bb?</h2>
        )}
        <div id="button-container">
          <button
            type="button"
            id="yes-btn"
            className={isYesClicked ? "fade-out" : "buttons"}
            onClick={handleYes}
          >
            Yes
          </button>
          <button
            type="button"
            id="no-btn"
            className={isNoDisabled ? "fade-out" : "buttons"}
            onClick={handleNo}
            disabled={isNoDisabled}
          >
            {noBtnValue}
          </button>
        </div>
      </div>
    </div>
  );
};
export default MainPage;
