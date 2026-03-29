import { useState } from "react";

function App() {
  const districts = [
    { name: "Srinagar", points: "300,300 340,300 340,340 300,340" },
    { name: "Anantnag", points: "320,360 360,360 360,400 320,400" },
    { name: "Baramulla", points: "260,260 300,260 300,300 260,300" },
    { name: "Kupwara", points: "240,220 280,220 280,260 240,260" },
    { name: "Pulwama", points: "340,340 380,340 380,380 340,380" }
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Know Your Politician – Kashmir</h1>

      <svg viewBox="0 0 800 800" width="500">

        {/* FULL REGION OUTLINE (J&K + LADAKH SHAPE STYLE) */}
        <path
          d="M150 200 L300 120 L500 140 L650 200 L720 300 L700 450 L600 550 L450 650 L300 620 L200 500 L150 350 Z"
          fill="#f5f5f5"
          stroke="black"
        />

        {/* DISTRICTS */}
        {districts.map((d, i) => (
          <polygon
            key={i}
            points={d.points}
            fill="lightblue"
            stroke="black"
            onClick={() => alert(d.name)}
          />
        ))}
      </svg>
    </div>
  );
}

export default App;
