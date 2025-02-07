import { useState } from "react";
import { messages } from "./messages";

//
export function App() {
  const [step, setSetp] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  //

  function handleCLick(e) {
    if (e.target.className === "next") {
      if (step < 3) setSetp(step + 1);
    }
    if (e.target.className === "previous") {
      if (step > 1) setSetp(step - 1);
    }
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      (
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button className="previous" onClick={handleCLick}>
              previous
            </button>
            <button className="next" onClick={handleCLick}>
              next
            </button>
          </div>
        </div>
      )}
      )
    </>
  );
}
