import React from "react";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Know Your Politician – Kashmir</h1>
      <p>Click map (districts coming next)</p>

      <img 
        src="./kashmir.svg" 
        alt="Kashmir Map" 
        style={{ width: "400px", cursor: "pointer" }}
        onClick={() => alert("Map clicked")}
      />
    </div>
  );
}

export default App;
