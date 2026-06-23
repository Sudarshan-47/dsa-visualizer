import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function QueueVisualizer() {
  const [queue, setQueue] = useState([]);
  const [input, setInput] = useState("");
  const [size, setSize] = useState("");
  const [capacity, setCapacity] = useState(null);
  const [message, setMessage] = useState("Create Queue first");

  const [frontHighlight, setFrontHighlight] = useState(-1);
  const [rearHighlight, setRearHighlight] = useState(-1);

  const resetHighlights = () => {
    setFrontHighlight(-1);
    setRearHighlight(-1);
  };

  const createQueue = () => {
    if (!size || Number(size) <= 0) {
      setMessage("Enter valid queue size");
      return;
    }

    setCapacity(Number(size));
    setMessage(`Queue created with size ${size}`);
    setSize("");
  };

  const enqueue = () => {
    if (!input) return;

    if (queue.length >= capacity) {
      setMessage("Queue Overflow");
      return;
    }

    setQueue([...queue, Number(input)]);
    setMessage(`Enqueued ${input}`);
    resetHighlights();
    setInput("");
  };

  const dequeue = () => {
    if (queue.length === 0) {
      setMessage("Queue Underflow");
      return;
    }

    const front = queue[0];
    setQueue(queue.slice(1));
    setMessage(`Dequeued ${front}`);
    resetHighlights();
  };

  const peek = () => {
    if (queue.length === 0) {
      setMessage("Queue empty");
      return;
    }

    setFrontHighlight(0);
    setRearHighlight(-1);
    setMessage(`Front element: ${queue[0]}`);
  };

  const rear = () => {
    if (queue.length === 0) {
      setMessage("Queue empty");
      return;
    }

    setRearHighlight(queue.length - 1);
    setFrontHighlight(-1);
    setMessage(`Rear element: ${queue[queue.length - 1]}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      enqueue();
    }
  };

  const buttonStyle = {
    padding: "12px 18px",
    background: "linear-gradient(90deg,#2563eb,#7c3aed)",
    color: "white",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    fontWeight: "bold",
    boxShadow: "0 4px 20px rgba(37,99,235,0.4)"
  };

  const inputStyle = {
    padding: "14px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.15)",
    background: "rgba(255,255,255,0.05)",
    color: "white",
    width: "180px"
  };

  return (
    <div style={{ padding: "30px", color: "white" }}>
      <h1
        style={{
          fontSize: "48px",
          marginBottom: "25px",
          background: "linear-gradient(90deg,#38bdf8,#818cf8)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}
      >
        🚶 Queue Visualizer
      </h1>

      {capacity === null ? (
        <div
          style={{
            background: "rgba(255,255,255,0.07)",
            padding: "24px",
            borderRadius: "20px",
            backdropFilter: "blur(18px)"
          }}
        >
          <input
            value={size}
            onChange={(e) => setSize(e.target.value)}
            placeholder="Enter queue size"
            style={inputStyle}
          />
          <button style={buttonStyle} onClick={createQueue}>
            Create Queue
          </button>
        </div>
      ) : (
        <>
          <div
            style={{
              background: "rgba(255,255,255,0.07)",
              padding: "24px",
              borderRadius: "20px",
              backdropFilter: "blur(18px)"
            }}
          >
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Enter value"
                style={inputStyle}
              />

              <button style={buttonStyle} onClick={enqueue}>Enqueue</button>
              <button style={buttonStyle} onClick={dequeue}>Dequeue</button>
              <button style={buttonStyle} onClick={peek}>Peek</button>
              <button style={buttonStyle} onClick={rear}>Rear</button>
            </div>
          </div>

          <div
            style={{
              marginTop: "25px",
              padding: "18px",
              background: "rgba(255,255,255,0.07)",
              borderRadius: "16px"
            }}
          >
            {message}
          </div>

          <div
            style={{
              marginTop: "20px",
              padding: "18px",
              background: "rgba(255,255,255,0.07)",
              borderRadius: "16px",
              width: "fit-content"
            }}
          >
            Size: {queue.length} / {capacity}
          </div>

          <div style={{ marginTop: "40px" }}>
            <p style={{ fontSize: "18px", marginBottom: "16px" }}>Front →</p>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <AnimatePresence>
                {queue.map((item, index) => (
                  <motion.div
                    key={index}
                    layout
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -100, opacity: 0 }}
                  >
                    <div
                      style={{
                        width: "90px",
                        height: "90px",
                        background:
                          index === frontHighlight
                            ? "linear-gradient(135deg,#ef4444,#dc2626)"
                            : index === rearHighlight
                            ? "linear-gradient(135deg,#facc15,#eab308)"
                            : "linear-gradient(135deg,#22c55e,#16a34a)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "18px",
                        fontSize: "28px",
                        fontWeight: "bold",
                        color: "white",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.35)"
                      }}
                    >
                      {item}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <p style={{ marginTop: "16px", fontSize: "18px" }}>← Rear</p>
          </div>
        </>
      )}
    </div>
  );
}

export default QueueVisualizer;