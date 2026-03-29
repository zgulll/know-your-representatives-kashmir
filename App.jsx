function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Know Your Politician – Kashmir</h1>

      <svg width="500" height="500" style={{ border: "1px solid black" }}>

        {/* MAP OUTLINE */}
        <polygon
          points="50,150 200,50 350,80 450,150 480,250 450,350 350,450 200,420 100,300"
          fill="#eee"
          stroke="black"
        />

        {/* DISTRICTS (BIG + GUARANTEED VISIBLE) */}
        <rect x="200" y="150" width="80" height="80" fill="blue" onClick={() => alert("Srinagar")} />
        <rect x="150" y="200" width="80" height="80" fill="green" onClick={() => alert("Budgam")} />
        <rect x="100" y="150" width="80" height="80" fill="red" onClick={() => alert("Baramulla")} />
        <rect x="80" y="100" width="80" height="80" fill="purple" onClick={() => alert("Kupwara")} />
        <rect x="220" y="100" width="80" height="80" fill="orange" onClick={() => alert("Bandipora")} />
        <rect x="260" y="140" width="80" height="80" fill="pink" onClick={() => alert("Ganderbal")} />
        <rect x="260" y="230" width="80" height="80" fill="cyan" onClick={() => alert("Pulwama")} />
        <rect x="200" y="260" width="80" height="80" fill="yellow" onClick={() => alert("Shopian")} />
        <rect x="260" y="320" width="80" height="80" fill="brown" onClick={() => alert("Anantnag")} />

      </svg>
    </div>
  );
}

export default App;
