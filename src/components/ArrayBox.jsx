import { motion } from "framer-motion";

function ArrayBox({ value, index, highlight }) {
  return (
    <motion.div
      initial={{ scale: 0, y: -50 }}
      animate={{ scale: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        style={{
          width: "70px",
          height: "70px",
          background: index === highlight ? "#ef4444" : "#22c55e",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "24px",
          borderRadius: "12px",
        }}
      >
        {value}
      </div>
      <p style={{ textAlign: "center" }}>{index}</p>
    </motion.div>
  );
}

export default ArrayBox;