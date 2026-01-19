import React, { useState } from "react";

export default function App() {
  const [selected, setSelected] = useState(null);

  const politicians = [
    {
      id: 1,
      name: "Member of Parliament",
      area: "Srinagar",
      mentalHealth: "Statements related to youth mental health",
      womenIssues: "Spoke on women education and safety",
      x: 190,
      y: 150,
    },
    {
      id: 2,
      name: "Member of Parliament",
      area: "Baramulla",
      mentalHealth: "No public statements found",
      womenIssues: "Raised employment concerns for women",
      x: 140,
      y: 120,
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f7f7f7",
        fontFamily: "Inter, Arial, sans-serif",
        padding: "30px",
      }}
    >
      {/* HEADER */}
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "32px", marginBottom: "8px" }}>
          Know Your Politician – Kashmir
        </h1>
        <p style={{ color: "#555", marginBottom: "30px" }}>
          A civic education initiative to help citizens understand what their
          elected representatives have spoken about.
        </p>

        {/* MAP SECTION */}
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            marginBottom: "30px",
          }}
        >
          <p style={{ marginBottom: "10px", fontWeight: "500" }}>
            Click on a flag to view details
          </p>

          <div style={{ position: "relative", width: "400px" }}>
            <img
              src="./kashmir.svg"
              alt="Map of Kashmir"
              width="400"
              style={{ borderRadius: "6px" }}
            />

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
        </div>

        {/* INFO CARD */}
        {selected && (
          <div
            style={{
              background: "#ffffff",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              maxWidth: "400px",
            }}
          >
            <h3 style={{ marginBottom: "10px" }}>{selected.name}</h3>
            <p>
              <b>Constituency:</b> {selected.area}
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


