import ArrayVisualizer from "./ArrayVisualizer";
import StackVisualizer from "./StackVisualizer";
import QueueVisualizer from "./QueueVisualizer";
import LinkedListVisualizer from "./LinkedListVisualizer";
import TreeVisualizer from "./TreeVisualizer";
import GraphVisualizer from "./GraphVisualizer";
import HeapVisualizer from "./HeapVisualizer";

function Visualizer({ selectedDS }) {
  return (
    <div style={{ flex: 1, padding: "20px" }}>
      {selectedDS === "array" && <ArrayVisualizer />}
      {selectedDS === "stack" && <StackVisualizer />}
      {selectedDS === "queue" && <QueueVisualizer />}
      {selectedDS === "linkedlist" && <LinkedListVisualizer />}
      {selectedDS === "tree" && <TreeVisualizer />}
      {selectedDS === "graph" && <GraphVisualizer />}
      {selectedDS === "heap" && <HeapVisualizer />}
    </div>
  );
}

export default Visualizer;