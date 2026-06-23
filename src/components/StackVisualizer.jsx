import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function StackVisualizer() {
  const [stack, setStack] = useState([]);
  const [input, setInput] = useState("");
  const [size, setSize] = useState("");
  const [capacity, setCapacity] = useState(null);
  const [message, setMessage] = useState("Create Stack first");
  const [topHighlight, setTopHighlight] = useState(-1);

  const createStack = () => {
    if (!size || Number(size) <= 0) {
      setMessage("Enter valid stack size");
      return;
    }

    setCapacity(Number(size));
    setMessage(`Stack created with size ${size}`);
    setSize("");
  };

  const push = () => {
    if (!input) return;

    if (stack.length >= capacity) {
      setMessage("Stack Overflow");
      return;
    }

    setStack([...stack, Number(input)]);
    setTopHighlight(-1);
    setMessage(`Pushed ${input}`);
    setInput("");
  };

  const pop = () => {
    if (stack.length === 0) {
      setMessage("Stack Underflow");
      return;
    }

    const top = stack[stack.length - 1];
    setStack(stack.slice(0, -1));
    setTopHighlight(-1);
    setMessage(`Popped ${top}`);
  };

  const peek = () => {
    if (stack.length === 0) {
      setMessage("Stack empty");
      return;
    }

    setTopHighlight(stack.length - 1);
    setMessage(`Top element: ${stack[stack.length - 1]}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      push();
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
        🥞 Stack Visualizer
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
            placeholder="Enter stack size"
            style={inputStyle}
          />
          <button style={buttonStyle} onClick={createStack}>
            Create Stack
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

              <button style={buttonStyle} onClick={push}>Push</button>
              <button style={buttonStyle} onClick={pop}>Pop</button>
              <button style={buttonStyle} onClick={peek}>Peek</button>
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
            Size: {stack.length} / {capacity}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column-reverse",
              alignItems: "center",
              marginTop: "35px",
            }}
          >
            <AnimatePresence>
              {stack.map((item, index) => (
                <motion.div
                  key={index}
                  layout
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                >
                  <div
                    style={{
                      width: "140px",
                      height: "70px",
                      background:
                        index === topHighlight
                          ? "linear-gradient(135deg,#ef4444,#dc2626)"
                          : "linear-gradient(135deg,#22c55e,#16a34a)",
                      margin: "6px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "16px",
                      fontSize: "24px",
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

            <div style={{ width: "160px", borderBottom: "4px solid white" }} />
          </div>
        </>
      )}
    </div>
  );
}

export default StackVisualizer;