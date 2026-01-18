import React, { useState } from "react";

/*
This is the DATA part.
Each politician is written here.
Later you will replace names + info.
*/
const politicians = [
  {
    id: 1,
    name: "MP Name",
    area: "Srinagar",
    mentalHealth: "Spoke about youth mental health in Parliament (2023)",
    womenIssues: "Supported women education initiatives",
    x: 200,
    y: 120,
  },
  {
    id: 2,
    name: "MP Name",
    area: "Anantnag",
    mentalHealth: "No public statement found",
    womenIssues: "Raised concerns about women safety",
    x: 240,
    y: 200,
  },
];

export default function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {/* WEBSITE TITLE */}
      <h1>Know Your Politician – Kashmir</h1>

      <p>
        Click on a flag to see what your representative has said about mental
        health and women’s issues.
      </p>

      {/* MAP AREA */}
      <svg width="400" height="300" style={{ border: "1px solid #ccc" }}>
        {/* Fake Kashmir shape for now */}
        <path
          d="M60 80 Q200 20 340 100 L300 240 Q180 280 80 220 Z"
          fill="#e5e7eb"
          stroke="#555"
        />

        {/* FLAGS */}
        {politicians.map((p) => (
          <circle
            key={p.id}
            cx={p.x}
            cy={p.y}
            r="8"
            fill="red"
            onClick={() => setSelected(p)}
            style={{ cursor: "pointer" }}
          />
        ))}
      </svg>

      {/* INFO BOX */}
      <div style={{ marginTop: "20px" }}>
        {!selected ? (
          <p>Click a flag to see details.</p>
        ) : (
          <div>
            <h3>{selected.name}</h3>
            <p><strong>Area:</strong> {selected.area}</p>
            <p><strong>Mental Health:</strong> {selected.mentalHealth}</p>
            <p><strong>Women’s Issues:</strong> {selected.womenIssues}</p>

            <button onClick={() => setSelected(null)}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
}
