import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function LinkedListVisualizer() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("Linked List is empty");
  const [highlight, setHighlight] = useState(-1);

  const insertBeginning = () => {
    if (!input) return;

    setList([Number(input), ...list]);
    setMessage(`Inserted ${input} at beginning`);
    setHighlight(0);
    setInput("");
  };

  const insertEnd = () => {
    if (!input) return;

    setList([...list, Number(input)]);
    setMessage(`Inserted ${input} at end`);
    setHighlight(list.length);
    setInput("");
  };

  const deleteNode = () => {
    if (!input) return;

    const value = Number(input);
    const index = list.indexOf(value);

    if (index === -1) {
      setMessage("Node not found");
      return;
    }

    const newList = [...list];
    newList.splice(index, 1);

    setList(newList);
    setMessage(`Deleted node ${value}`);
    setHighlight(-1);
    setInput("");
  };

  const search = () => {
    if (!input) return;

    const value = Number(input);
    const index = list.indexOf(value);

    if (index !== -1) {
      setHighlight(index);
      setMessage(`Found ${value} at node ${index}`);
    } else {
      setMessage("Node not found");
      setHighlight(-1);
    }

    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      insertEnd();
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
        🔗 Linked List Visualizer
      </h1>

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

          <button style={buttonStyle} onClick={insertBeginning}>
            Insert Beginning
          </button>

          <button style={buttonStyle} onClick={insertEnd}>
            Insert End
          </button>

          <button style={buttonStyle} onClick={deleteNode}>
            Delete Node
          </button>

          <button style={buttonStyle} onClick={search}>
            Search
          </button>
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
          display: "flex",
          alignItems: "center",
          gap: "14px",
          marginTop: "40px",
          flexWrap: "wrap"
        }}
      >
        <AnimatePresence>
          {list.map((item, index) => (
            <motion.div
              key={index}
              layout
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              style={{ display: "flex", alignItems: "center" }}
            >
              <div
                style={{
                  display: "flex",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.35)"
                }}
              >
                <div
                  style={{
                    width: "80px",
                    height: "70px",
                    background:
                      index === highlight
                        ? "linear-gradient(135deg,#ef4444,#dc2626)"
                        : "linear-gradient(135deg,#22c55e,#16a34a)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "24px",
                    fontWeight: "bold",
                  }}
                >
                  {item}
                </div>

                <div
                  style={{
                    width: "45px",
                    height: "70px",
                    background: "#334155",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "22px"
                  }}
                >
                  •
                </div>
              </div>

              {index !== list.length - 1 ? (
                <span style={{ fontSize: "32px", margin: "0 12px" }}>→</span>
              ) : (
                <div
                  style={{
                    marginLeft: "12px",
                    padding: "8px 14px",
                    borderRadius: "12px",
                    background: "rgba(255,255,255,0.07)"
                  }}
                >
                  NULL
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default LinkedListVisualizer;