import { useState } from "react";
import "./user/FlipAnimation.css";

function FlipAnimation() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div>
      <div className="container" onClick={handleClick}>
        <div className={`card ${isFlipped ? "flipped" : ""}`}>
          <div className="front">Click to flip</div>
          <div className="back">Yo, what up?</div>
        </div>
      </div>
    </div>
  );
}

export default FlipAnimation;
