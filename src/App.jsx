import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Visualizer from "./components/Visualizer";
import Home from "./components/Home";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDS, setSelectedDS] = useState("");

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #312e81 100%)",
        color: "white",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <Sidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedDS={selectedDS}
        setSelectedDS={setSelectedDS}
      />

      {selectedDS ? (
        <Visualizer selectedDS={selectedDS} />
      ) : (
        <Home setSelectedCategory={setSelectedCategory} />
      )}
    </div>
  );
}

export default App;