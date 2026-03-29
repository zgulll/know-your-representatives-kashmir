function App() {
  const districts = [
    { name: "Srinagar", points: "320,260 380,260 380,320 320,320" },
    { name: "Budgam", points: "260,280 320,280 320,340 260,340" },
    { name: "Baramulla", points: "200,220 280,220 280,300 200,300" },
    { name: "Kupwara", points: "150,160 230,160 230,230 150,230" },
    { name: "Bandipora", points: "300,200 360,200 360,260 300,260" },
    { name: "Ganderbal", points: "340,230 400,230 400,290 340,290" },
    { name: "Pulwama", points: "360,320 420,320 420,380 360,380" },
    { name: "Shopian", points: "300,340 360,340 360,400 300,400" },
    { name: "Anantnag", points: "340,400 420,400 420,480 340,480" }
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Know Your Politician – Kashmir</h1>

      <svg viewBox="0 0 800 800" width="500">

        {/* OUTLINE */}
        <path
          d="M150 200 L300 120 L500 140 L650 200 L720 300 L700 450 L600 550 L450 650 L300 620 L200 500 L150 350 Z"
          fill="#f5f5f5"
          stroke="black"
          strokeWidth="2"
        />

        {/* DISTRICTS */}
        {districts.map((d, i) => (
          <polygon
            key={i}
            points={d.points}
            fill="rgba(0,150,255,0.6)"
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
