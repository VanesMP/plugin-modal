import React from "react";
import ReactDOM from "react-dom";
import { Modal } from "../src/lib/Modal.jsx";
import "../src/lib/modal.css";

ReactDOM.createRoot(
    <React.StrictMode>
      <Modal />
    </React.StrictMode>,
    document.getElementById('root')
  )
