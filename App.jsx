import React, { useState } from "react";

export default function App() {
  const [selected, setSelected] = useState(null);

  const politicians = [
    {
      id: 1,
      name: "MP Name",
      area: "Srinagar",
      mentalHealth: "Spoke about youth mental health in Parliament (2023)",
      womenIssues: "Supported women education initiatives",
      x: 190,
      y: 150,
    },
    {
      id: 2,
      name: "MP Name",
      area: "Baramulla",
      mentalHealth: "No public statements found",
      womenIssues: "Raised issue of women employment",
      x: 210,
      y: 170,
    },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Know Your Politician – Kashmir</h1>
      <p>Click on a flag to see details.</p>

      {/* MAP + FLAGS */}
      <div style={{ position: "relative", width: "400px" }}>
        <img src="./kashmir.svg" alt="Kashmir Map" width="400" />

        {politicians.map((p) => (
          <div
            key={p.id}
            onClick={() => setSelected(p)}
            style={{
              position: "absolute",
              left: p.x,
              top: p.y,
              cursor: "pointer",
              fontSize: "22px",
            }}
          >
            🚩
          </div>
        ))}
      </div>

      {/* INFO BOX */}
      {selected && (
        <div
          style={{
            marginTop: "20px",
            border: "1px solid #ddd",
            padding: "10px",
            maxWidth: "400px",
          }}
        >
          <h3>{selected.name}</h3>
          <p><b>Area:</b> {selected.area}</p>
          <p><b>Mental Health:</b> {selected.mentalHealth}</p>
          <p><b>Women’s Issues:</b> {selected.womenIssues}</p>
        </div>
      )}
    </div>
  );
}
