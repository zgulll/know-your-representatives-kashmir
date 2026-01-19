import React, { useState } from "react";

export default function App() {
  const [selected, setSelected] = useState(null);

  // DATA: you will edit this later
  const politicians = [
    {
      id: 1,
      name: "MP Name",
      area: "Srinagar",
      mentalHealth: "Spoke about youth mental health in Parliament (2023)",
      womenIssues: "Supported women education initiatives",
    },
    {
      id: 2,
      name: "MP Name",
      area: "Baramulla",
      mentalHealth: "No major statements recorded",
      womenIssues: "Raised issue of women employment",
    },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Know Your Politician – Kashmir</h1>
      <p>
        Click on a flag to see what your representative has said about mental
        health and women’s issues.
      </p>

      {/* REAL KASHMIR MAP */}
      <img
        src="./kashmir.svg"
        alt="Kashmir Map"
        width="400"
        style={{ border: "1px solid #ccc" }}
      />

      {/* BUTTONS = FLAGS (temporary, simple & WORKING) */}
      <div style={{ marginTop: "15px" }}>
        {politicians.map((p) => (
          <button
            key={p.id}
            onClick={() => setSelected(p)}
            style={{
              marginRight: "10px",
              padding: "6px 10px",
              cursor: "pointer",
            }}
          >
            🚩 {p.area}
          </button>
        ))}
      </div>

      {/* INFO BOX */}
      <div style={{ marginTop: "20px" }}>
        {!selected ? (
          <p>Click a flag to see details.</p>
        ) : (
          <div
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              maxWidth: "400px",
            }}
          >
            <h3>{selected.name}</h3>
            <p>
              <b>Area:</b> {selected.area}
            </p>
            <p>
              <b>Mental Health:</b> {selected.mentalHealth}
            </p>
            <p>
              <b>Women’s Issues:</b> {selected.womenIssues}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
