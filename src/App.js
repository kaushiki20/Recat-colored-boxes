import React from "react";
import "./styles.css";

function Box(props) {
  return (
    <div
      style={{
        //borderColor: "black",
        height: "30px",
        width: "30px",
        borderWidth: 2,
        opacity: 0,
        // margin: 10,
        // borderStyle: "solid",
        backgroundColor: "black"
      }}
    />
  );
}
function random(number) {
  return Math.floor(Math.random() * 4);
}

function App(props) {
  let boxes = [];
  var handleClick = e => {
    const palette = [
      "#FFC312",
      "#C4E538",
      "#12CBC4",
      "#FDA7DF",
      "#ED4C67",
      "#F79F1F",
      "#A3CB38",
      "#1289A7",
      "#D980FA",
      "#B53471",
      "#EE5A24",
      "#009432",
      "#0652DD",
      "#9980FA",
      "#833471",
      "#EA2027",
      "#006266",
      "#1B1464",
      "#1B1464",
      "#5758BB",
      "#5758BB",
      "#6F1E51"
    ];

    //var choice = Math.floor(Math.random() * palette.length);
    e.target.style.backgroundColor =
      palette[Math.floor(Math.random() * palette.length)];
    e.target.animate(
      {
        opacity: [0, 1] // [ from, to ]
        // color:   [ "#fff", "#000" ] // [ from, to ]
      },
      1000
    );
    e.stopPropagation();
  };

  var handleLeave = e => {
    // e.target.style.backgroundColor = "black";
    e.target.animate(
      {
        opacity: [1, 0] // [ from, to ]
        // color:   [ "#fff", "#000" ] // [ from, to ]
      },
      1000
    );
    e.stopPropagation();
  };

  for (let i = 0; i < 1000; i++) {
    boxes.push(<Box key={i} />);
  }

  return (
    <div
      className="App"
      onMouseOver={handleClick}
      style={{ backgroundColor: "black" }}
      onMouseOut={handleLeave}
    >
      {boxes}
    </div>
  );
}

export default App;
