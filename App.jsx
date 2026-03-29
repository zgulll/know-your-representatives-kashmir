import React from "react";

function App() {

  const handleClick = (district) => {
    alert("You clicked " + district);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Know Your Politician – Kashmir</h1>
      <p>Click a district</p>

      <svg viewBox="0 0 500 500" width="400">

        {/* OUTLINE */}
        <rect x="50" y="50" width="300" height="300" fill="none" stroke="black" />

        {/* SRINAGAR */}
        <rect x="150" y="150" width="60" height="40"
          fill="#8ecae6"
          onClick={() => handleClick("Srinagar")}
        />

        {/* BUDGAM */}
        <rect x="100" y="150" width="50" height="40"
          fill="#219ebc"
          onClick={() => handleClick("Budgam")}
        />

        {/* BARAMULLA */}
        <rect x="80" y="100" width="80" height="40"
          fill="#023047"
          onClick={() => handleClick("Baramulla")}
        />

        {/* ANANTNAG */}
        <rect x="150" y="220" width="70" height="50"
          fill="#ffb703"
          onClick={() => handleClick("Anantnag")}
        />

        {/* PULWAMA */}
        <rect x="120" y="210" width="40" height="40"
          fill="#fb8500"
          onClick={() => handleClick("Pulwama")}
        />

        {/* SHOPIAN */}
        <rect x="90" y="220" width="40" height="40"
          fill="#d00000"
          onClick={() => handleClick("Shopian")}
        />

        {/* GANDERBAL */}
        <rect x="170" y="120" width="50" height="30"
          fill="#90dbf4"
          onClick={() => handleClick("Ganderbal")}
        />

        {/* BANDIPORA */}
        <rect x="200" y="90" width="60" height="30"
          fill="#48cae4"
          onClick={() => handleClick("Bandipora")}
        />

        {/* KUPWARA */}
        <rect x="40" y="80" width="60" height="50"
          fill="#0077b6"
          onClick={() => handleClick("Kupwara")}
        />

      </svg>
    </div>
  );
}

export default App;
