
import React from "react";
import { createRoot } from "react-dom/client";

import { Barplot } from "./BarChart.jsx";
import { data } from "./data.js";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Students Enrolled by Country</h2>
      <Barplot data={data} />
    </div>
  </React.StrictMode>
);
