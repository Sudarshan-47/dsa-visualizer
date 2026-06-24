import { motion } from "framer-motion";

function Home({ setSelectedCategory, setSelectedDS }) {
  const cardStyle = {
    width: "320px",
    padding: "40px",
    borderRadius: "24px",
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(255,255,255,0.1)",
    cursor: "pointer",
    textAlign: "center",
    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
  };

  return (
    <div
      style={{
        flex: 1,
        width: "100%",
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(36px, 5vw, 72px)",
          marginBottom: "20px",
          textAlign: "center",
          lineHeight: 1.2,
        }}
      >
        Master DSA Visually
      </h1>

      <p
        style={{
          fontSize: "clamp(16px, 2vw, 22px)",
          maxWidth: "950px",
          textAlign: "center",
          color: "#cbd5e1",
          padding: "0 20px",
        }}
      >
        Learn each structure with animations and step-by-step
        visualizations.
      </p>

      <div
        style={{
          display: "flex",
          gap: "40px",
          marginTop: "70px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <motion.div
          whileHover={{ scale: 1.05, y: -8 }}
          style={cardStyle}
          onClick={() => {
            setSelectedCategory("primitive");
            setSelectedDS("array");
          }}
        >
          <h2 style={{ fontSize: "32px" }}>📦 Primitive DS</h2>
          <p style={{ marginTop: "15px", fontSize: "18px" }}>
            Array, Stack, Queue, Linked List
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05, y: -8 }}
          style={cardStyle}
          onClick={() => {
            setSelectedCategory("nonprimitive");
            setSelectedDS("tree");
          }}
        >
          <h2 style={{ fontSize: "32px" }}>🌳 Non-Primitive DS</h2>
          <p style={{ marginTop: "15px", fontSize: "18px" }}>
            Trees, Graphs, Heap
          </p>
        </motion.div>
      </div>

      <p
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "16px",
          color: "#94a3b8",
          textAlign: "center",
          whiteSpace: "nowrap",
        }}
      >
        Designed & Developed by{" "}
        <span style={{ color: "#38bdf8", fontWeight: "bold" }}>
          Sudarshan Pesingi
        </span>{" "}
        🚀
      </p>
    </div>
  );
}

export default Home;