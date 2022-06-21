import React from "react";

/**Render of the modal when the form is validated
 * @function Modal
 * @param {JSX} children
 * @returns {JSX}
 */

export const Modal = ({ message, closeUp }) => {
  return (
    <div id="confirmation">
      <p className="textModal">{message}</p>
      <button type="button" className="btnClose" onClick={closeUp}>
        X
      </button>
    </div>
  );
}
