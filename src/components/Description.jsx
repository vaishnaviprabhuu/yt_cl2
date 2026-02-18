import { useState } from "react";

export default function Description({ text }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="mt-4 p-3"
      style={{
        backgroundColor: "#f2f2f2",
        borderRadius: "12px",
        fontSize: "14px",
      }}
    >
      <p className="mb-2">
        {expanded ? text : text.substring(0, 140) + "..."}
      </p>

      <span
        onClick={() => setExpanded(!expanded)}
        style={{
          cursor: "pointer",
          fontWeight: "500",
        }}
      >
        {expanded ? "Show Less" : "Show More"}
      </span>
    </div>
  );
}