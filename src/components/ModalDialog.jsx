import React from "react";

const ModalDialog = ({ children }) => {
  return (
    <div className={`modal`}>
      <div className="dialogContent">{children}</div>
    </div>
  );
};

export default ModalDialog;
