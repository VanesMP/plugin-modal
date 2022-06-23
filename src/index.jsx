import React from "react";
import ReactDOM from "react-dom/client";
import { Modal } from "../src/lib/Modal.jsx";
import "../src/lib/modal.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
      <Modal />
    </React.StrictMode>
);
