import { useState } from "react";

function TreeVisualizer() {
  const [nodes, setNodes] = useState([]);
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("Create Binary Tree");
  const [traversalResult, setTraversalResult] = useState("");

  const insertNode = () => {
    if (!input) return;

    setNodes([...nodes, Number(input)]);
    setMessage(`Inserted node ${input}`);
    setInput("");
  };

  const inorder = () => {
    setTraversalResult(nodes.join(" → "));
    setMessage("Inorder Traversal");
  };

  const preorder = () => {
    setTraversalResult(nodes.join(" → "));
    setMessage("Preorder Traversal");
  };

  const postorder = () => {
    const reversed = [...nodes].reverse();
    setTraversalResult(reversed.join(" → "));
    setMessage("Postorder Traversal");
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
      <h1 style={{ fontSize: "42px" }}>🌳 Tree Visualizer</h1>

      {/* Input */}
      <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter node value"
          style={inputStyle}
        />

        <button style={buttonStyle} onClick={insertNode}>
          Insert Node
        </button>
      </div>

      {/* Traversal Buttons */}
      <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
        <button style={buttonStyle} onClick={inorder}>
          Inorder
        </button>

        <button style={buttonStyle} onClick={preorder}>
          Preorder
        </button>

        <button style={buttonStyle} onClick={postorder}>
          Postorder
        </button>
      </div>

      <h3 style={{ marginTop: "20px" }}>{message}</h3>

      {/* Traversal Output */}
      {traversalResult && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            background: "rgba(255,255,255,0.08)",
            borderRadius: "12px",
            fontSize: "20px",
          }}
        >
          Traversal: {traversalResult}
        </div>
      )}

      {/* Tree Visualization */}
      <div style={{ marginTop: "50px" }}>
        {[0, 1, 2, 3].map((level) => {
          const start = Math.pow(2, level) - 1;
          const end = Math.pow(2, level + 1) - 1;
          const levelNodes = nodes.slice(start, end);

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

export default TreeVisualizer;