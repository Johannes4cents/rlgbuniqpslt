import React from "react";

type RitualLogViewerProps = {
  path: string[];
};

export const RitualLogViewer: React.FC<RitualLogViewerProps> = ({ path }) => {
  return (
    <div style={{ padding: "2rem", fontFamily: "monospace" }}>
      <h2>⛧ RitualLogViewer</h2>
      <p>This ritual listens to the following glyphic path:</p>
      <pre>{JSON.stringify(path, null, 2)}</pre>
    </div>
  );
};

export default RitualLogViewer;
