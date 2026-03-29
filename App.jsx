import React from "react";

function App() {
  const districts = [
    { name: "Srinagar", points: "300,250 380,250 380,330 300,330" },
    { name: "Anantnag", points: "320,350 420,350 420,450 320,450" },
    { name: "Baramulla", points: "200,220 300,220 300,300 200,300" },
    { name: "Kupwara", points: "150,150 250,150 250,220 150,220" },
    { name: "Pulwama", points: "400,280 500,280 500,360 400,360" }
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Know Your Politician – Kashmir</h1>

      <svg viewBox="0 0 800 800" width="500">

        {/* MAP OUTLINE */}
        <path
          d="M150 200 L300 120 L500 140 L650 200 L720 300 L700 450 L600 550 L450 650 L300 620 L200 500 L150 350 Z"
          fill="#f0f0f0"
          stroke="black"
          strokeWidth="2"
        />

        {/* DISTRICT BLOCKS */}
        {districts.map((d, i) => (
          <polygon
            key={i}
            points={d.points}
            fill="skyblue"
            stroke="black"
            strokeWidth="1"
            onClick={() => alert(d.name)}
          />
        ))}
      </svg>
    </div>
  );
}

export default App;
