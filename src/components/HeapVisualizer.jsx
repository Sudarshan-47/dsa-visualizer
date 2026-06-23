import { useState } from "react";

function HeapVisualizer() {
  const [heap, setHeap] = useState([]);
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("Create Min Heap");

  const insertHeap = () => {
    if (!input) return;

    const newHeap = [...heap, Number(input)];

    let i = newHeap.length - 1;

    while (i > 0) {
      let parent = Math.floor((i - 1) / 2);

      if (newHeap[parent] <= newHeap[i]) break;

      [newHeap[parent], newHeap[i]] = [newHeap[i], newHeap[parent]];
      i = parent;
    }

    setHeap(newHeap);
    setMessage(`Inserted ${input} into Heap`);
    setInput("");
  };

  const buttonStyle = {
    padding: "12px 18px",
    background: "linear-gradient(90deg,#2563eb,#7c3aed)",
    color: "white",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  const inputStyle = {
    padding: "14px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.15)",
    background: "rgba(255,255,255,0.05)",
    color: "white",
    width: "180px",
  };

  return (
    <div style={{ padding: "30px", color: "white" }}>
      <h1 style={{ fontSize: "42px" }}>⛰ Heap Visualizer</h1>

      <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter value"
          style={inputStyle}
        />

        <button style={buttonStyle} onClick={insertHeap}>
          Insert
        </button>
      </div>

      <h3 style={{ marginTop: "20px" }}>{message}</h3>

      <div style={{ marginTop: "30px" }}>
        <h3>Heap Array:</h3>
        <p>[ {heap.join(", ")} ]</p>
      </div>

      <div style={{ marginTop: "40px" }}>
        {[0, 1, 2, 3].map((level) => {
          const start = Math.pow(2, level) - 1;
          const end = Math.pow(2, level + 1) - 1;
          const levelNodes = heap.slice(start, end);

          if (levelNodes.length === 0) return null;

          return (
            <div
              key={level}
              style={{
                display: "flex",
                justifyContent: "center",
                gap: `${160 - level * 30}px`,
                marginBottom: "30px",
              }}
            >
              {levelNodes.map((node, index) => (
                <div
                  key={index}
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg,#22c55e,#16a34a)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "24px",
                    fontWeight: "bold",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.35)",
                  }}
                >
                  {node}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HeapVisualizer;