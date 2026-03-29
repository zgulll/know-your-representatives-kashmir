import { useEffect, useState } from "react";

function App() {
  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    fetch("/data/kashmir_districts.geojson")
      .then(res => res.json())
      .then(data => setDistricts(data.features));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Know Your Politician – Kashmir</h1>

      <svg viewBox="0 0 800 800" width="500">

        {/* OUTLINE */}
        <path
          d="M120 200 L200 120 L350 100 L520 140 L650 220 L700 320 L670 420
             L600 520 L480 600 L360 620 L260 580 L180 520 L120 440 Z"
          fill="none"
          stroke="black"
        />

        {/* DISTRICTS */}
        {districts.map((d, i) => (
          <polygon
            key={i}
            points={d.geometry.coordinates[0]
              .map(p => p.join(","))
              .join(" ")}
            fill="rgba(0, 128, 0, 0.5)"
            stroke="black"
            onClick={() => alert(d.properties.district)}
          />
        ))}

      </svg>
    </div>
  );
}

export default App;


