import React from "react";

const Clock = (props) => {
  const { degreeMin, degreeHrs, degreeSec } = props.degrees;

  const styleMin = {
    transform: `rotate(${degreeMin}deg)`,
  };
  const styleHrs = {
    transform: `rotate(${degreeHrs}deg)`,
  };
  const styleSec = {
    transform: `rotate(${degreeSec}deg)`,
  };
  return (
    <>
      <div className="clock">
        <div className="board">
          <div className="numbers top">
            <div className="hour">11</div>
            <div className="hour">12</div>
            <div className="hour">1</div>
          </div>
          <div className="numbers bottom">
            <div className="hour">7</div>
            <div className="hour">6</div>
            <div className="hour">5</div>
          </div>
          <div className="numbers left">
            <div className="hour">10</div>
            <div className="hour">9</div>
            <div className="hour">8</div>
          </div>
          <div className="numbers right">
            <div className="hour">2</div>
            <div className="hour">3</div>
            <div className="hour">4</div>
          </div>
          <div className="sign">QUARZ</div>
          <div className="clueH" style={styleHrs}></div>
          <div className="clueM" style={styleMin}></div>
          <div className="clueS" style={styleSec}></div>
          <div className="dot"></div>
        </div>
      </div>
    </>
  );
};

export default Clock;
