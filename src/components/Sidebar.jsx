function Sidebar({
  selectedCategory,
  setSelectedCategory,
  selectedDS,
  setSelectedDS
}) {
  const getBtnStyle = (active) => ({
    width: "100%",
    padding: "14px",
    marginTop: "14px",
    borderRadius: "14px",
    border: active
      ? "1px solid #60a5fa"
      : "1px solid rgba(255,255,255,0.08)",
    cursor: "pointer",
    background: active
      ? "linear-gradient(90deg,#2563eb,#7c3aed)"
      : "rgba(255,255,255,0.06)",
    color: "white",
    fontSize: "16px",
    fontWeight: active ? "bold" : "normal",
    backdropFilter: "blur(10px)",
    boxShadow: active
      ? "0 0 25px rgba(59,130,246,0.6)"
      : "none",
    transition: "all 0.3s ease",
  });

  const goHome = () => {
    setSelectedCategory("");
    setSelectedDS("");
  };

  return (
    <div
      style={{
        width: "280px",
        padding: "24px",
        background: "rgba(17,24,39,0.6)",
        backdropFilter: "blur(20px)",
        borderRight: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <h1
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          background: "linear-gradient(90deg,#38bdf8,#818cf8)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        DSA Visualizer
      </h1>

      <button style={getBtnStyle(selectedDS === "")} onClick={goHome}>
        🏠 Home
      </button>

      {selectedCategory === "primitive" && (
        <>
          <button
            style={getBtnStyle(selectedDS === "array")}
            onClick={() => setSelectedDS("array")}
          >
            📦 Array
          </button>

          <button
            style={getBtnStyle(selectedDS === "stack")}
            onClick={() => setSelectedDS("stack")}
          >
            🥞 Stack
          </button>

          <button
            style={getBtnStyle(selectedDS === "queue")}
            onClick={() => setSelectedDS("queue")}
          >
            🚶 Queue
          </button>

          <button
            style={getBtnStyle(selectedDS === "linkedlist")}
            onClick={() => setSelectedDS("linkedlist")}
          >
            🔗 Linked List
          </button>
        </>
      )}

      {selectedCategory === "nonprimitive" && (
        <>
          <button
            style={getBtnStyle(selectedDS === "tree")}
            onClick={() => setSelectedDS("tree")}
          >
            🌳 Tree
          </button>

          <button
            style={getBtnStyle(selectedDS === "graph")}
            onClick={() => setSelectedDS("graph")}
          >
            🕸 Graph
          </button>

          <button
            style={getBtnStyle(selectedDS === "heap")}
            onClick={() => setSelectedDS("heap")}
          >
            ⛰ Heap
          </button>
        </>
      )}
    </div>
  );
}

export default Sidebar;