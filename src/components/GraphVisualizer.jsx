import { useState } from "react";

function GraphVisualizer() {
  const [vertices, setVertices] = useState([]);
  const [edges, setEdges] = useState([]);

  const [input, setInput] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [message, setMessage] = useState("Create Graph");

  const predefinedPositions = [
    { x: 120, y: 100 },
    { x: 300, y: 100 },
    { x: 500, y: 100 },
    { x: 180, y: 250 },
    { x: 400, y: 250 },
    { x: 120, y: 380 },
    { x: 300, y: 380 },
    { x: 500, y: 380 },
  ];

  const addVertex = () => {
    if (!input) return;

    if (vertices.some((v) => v.name === input)) {
      setMessage("Vertex already exists");
      return;
    }

    if (vertices.length >= predefinedPositions.length) {
      setMessage("Maximum 8 vertices supported");
      return;
    }

    const newVertex = {
      name: input,
      ...predefinedPositions[vertices.length],
    };

    setVertices([...vertices, newVertex]);
    setMessage(`Vertex ${input} added`);
    setInput("");
  };

  const addEdge = () => {
    if (!from || !to) return;

    const fromVertex = vertices.find((v) => v.name === from);
    const toVertex = vertices.find((v) => v.name === to);

    if (!fromVertex || !toVertex) {
      setMessage("Both vertices must exist");
      return;
    }

    setEdges([...edges, [from, to]]);
    setMessage(`Edge added: ${from} - ${to}`);
    setFrom("");
    setTo("");
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
      <h1 style={{ fontSize: "42px" }}>🕸 Graph Visualizer</h1>

      {/* Add Vertex */}
      <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Vertex name"
          style={inputStyle}
        />
        <button style={buttonStyle} onClick={addVertex}>
          Add Vertex
        </button>
      </div>

      {/* Add Edge */}
      <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
        <input
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          placeholder="From"
          style={inputStyle}
        />

        <input
          value={to}
          onChange={(e) => setTo(e.target.value)}
          placeholder="To"
          style={inputStyle}
        />

        <button style={buttonStyle} onClick={addEdge}>
          Add Edge
        </button>
      </div>

      <h3 style={{ marginTop: "20px" }}>{message}</h3>

      {/* Edge List */}
      {edges.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h3>Edges:</h3>
          {edges.map((edge, index) => (
            <p key={index}>
              {edge[0]} — {edge[1]}
            </p>
          ))}
        </div>
      )}

      {/* Graph Area */}
      <div
        style={{
          position: "relative",
          width: "650px",
          height: "470px",
          marginTop: "40px",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "20px",
          background: "rgba(255,255,255,0.03)",
          overflow: "hidden",
        }}
      >
        {/* Lines */}
        <svg
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        >
          {edges.map((edge, index) => {
            const fromVertex = vertices.find((v) => v.name === edge[0]);
            const toVertex = vertices.find((v) => v.name === edge[1]);

            if (!fromVertex || !toVertex) return null;

            return (
              <line
                key={index}
                x1={fromVertex.x}
                y1={fromVertex.y}
                x2={toVertex.x}
                y2={toVertex.y}
                stroke="white"
                strokeWidth="3"
              />
            );
          })}
        </svg>

        {/* Nodes */}
        {vertices.map((vertex, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              left: vertex.x - 35,
              top: vertex.y - 35,
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              background: "linear-gradient(135deg,#f59e0b,#d97706)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "24px",
              fontWeight: "bold",
              boxShadow: "0 8px 20px rgba(0,0,0,0.35)",
            }}
          >
            {vertex.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GraphVisualizer;