import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ArrayVisualizer() {
  const [array, setArray] = useState([]);
  const [size, setSize] = useState("");
  const [isCreated, setIsCreated] = useState(false);
  const [input, setInput] = useState("");
  const [indexInput, setIndexInput] = useState("");
  const [operation, setOperation] = useState("");
  const [message, setMessage] = useState("Create an array first");
  const [highlight, setHighlight] = useState(-1);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const createArray = () => {
    if (!size || Number(size) <= 0) return;
    setArray(new Array(Number(size)).fill("_"));
    setIsCreated(true);
    setMessage(`Array of size ${size} created`);
  };

  const append = () => {
    const emptyIndex = array.indexOf("_");
    if (emptyIndex === -1) {
      setMessage("Array is full");
      return;
    }
    const newArray = [...array];
    newArray[emptyIndex] = Number(input);
    setArray(newArray);
    setHighlight(emptyIndex);
    setMessage(`Inserted at index ${emptyIndex}`);
  };

  const insertAtIndex = () => {
    const index = Number(indexInput);
    if (index < 0 || index >= array.length) return;

    const newArray = [...array];
    newArray[index] = Number(input);
    setArray(newArray);
    setHighlight(index);
    setMessage(`Inserted at index ${index}`);
  };

  const deleteLast = () => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i >= 0; i--) {
      if (newArray[i] !== "_") {
        newArray[i] = "_";
        setArray(newArray);
        setMessage("Deleted last element");
        return;
      }
    }
    setMessage("Array empty");
  };

  const deleteAtIndex = () => {
    const index = Number(indexInput);
    if (index < 0 || index >= array.length) return;

    const newArray = [...array];
    for (let i = index; i < newArray.length - 1; i++) {
      newArray[i] = newArray[i + 1];
    }

    newArray[newArray.length - 1] = "_";
    setArray(newArray);
    setHighlight(index);
    setMessage(`Deleted index ${index}`);
  };

  const search = () => {
    const index = array.indexOf(Number(input));
    if (index !== -1) {
      setHighlight(index);
      setMessage(`Found at index ${index}`);
    } else {
      setMessage("Not found");
    }
  };

  const update = () => {
    const index = Number(indexInput);
    if (index < 0 || index >= array.length) return;

    const newArray = [...array];
    newArray[index] = Number(input);
    setArray(newArray);
    setHighlight(index);
    setMessage(`Updated index ${index}`);
  };

  const traverse = async () => {
    for (let i = 0; i < array.length; i++) {
      setHighlight(i);
      setMessage(`Traversing index ${i}`);
      await sleep(700);
    }
    setHighlight(-1);
  };

const executeOperation = () => {
  if (operation === "append") append();
  if (operation === "insert") insertAtIndex();
  if (operation === "deleteIndex") deleteAtIndex();
  if (operation === "search") search();
  if (operation === "update") update();

  setInput("");
  setIndexInput("");
  setOperation("");
};
const handleKeyDown = (e) => {
  if (e.key === "Enter") {
    executeOperation();
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
        📦 Array Visualizer
      </h1>

      {!isCreated && (
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
            placeholder="Array size"
            style={inputStyle}
          />
          <button style={buttonStyle} onClick={createArray}>
            Create Array
          </button>
        </div>
      )}

      {isCreated && (
        <>
          <div
            style={{
              background: "rgba(255,255,255,0.07)",
              padding: "24px",
              borderRadius: "20px",
              backdropFilter: "blur(18px)"
            }}
          >
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <button style={buttonStyle} onClick={() => setOperation("append")}>Append</button>
              <button style={buttonStyle} onClick={() => setOperation("insert")}>Insert</button>
              <button style={buttonStyle} onClick={deleteLast}>Delete Last</button>
              <button style={buttonStyle} onClick={() => setOperation("deleteIndex")}>Delete Index</button>
              <button style={buttonStyle} onClick={() => setOperation("search")}>Search</button>
              <button style={buttonStyle} onClick={() => setOperation("update")}>Update</button>
              <button style={buttonStyle} onClick={traverse}>Traverse</button>
            </div>

            <div style={{ marginTop: 20, display: "flex", gap: 10 }}>
              {(operation === "append" ||
                operation === "insert" ||
                operation === "search" ||
                operation === "update") && (
                <input
  value={input}
  onChange={(e) => setInput(e.target.value)}
  onKeyDown={handleKeyDown}
  placeholder="Enter value"
  style={inputStyle}
/>
              )}

              {(operation === "insert" ||
                operation === "update" ||
                operation === "deleteIndex") && (
                <input
  value={indexInput}
  onChange={(e) => setIndexInput(e.target.value)}
  onKeyDown={handleKeyDown}
  placeholder="Enter index"
  style={inputStyle}
/>
              )}

              {operation && (
                <button style={buttonStyle} onClick={executeOperation}>
                  Execute
                </button>
              )}
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

          <div style={{ display: "flex", gap: 14, marginTop: 35, flexWrap: "wrap" }}>
            <AnimatePresence>
              {array.map((item, index) => (
                <motion.div key={index} layout>
                  <div
                    style={{
                      width: 85,
                      height: 85,
                      background:
                        index === highlight
                          ? "linear-gradient(135deg,#ef4444,#dc2626)"
                          : "linear-gradient(135deg,#22c55e,#16a34a)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 18,
                      fontSize: 28,
                      fontWeight: "bold",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.35)"
                    }}
                  >
                    {item}
                  </div>
                  <p style={{ textAlign: "center" }}>{index}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </>
      )}
    </div>
  );
}

export default ArrayVisualizer;