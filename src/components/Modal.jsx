import React, { useState } from "react";
import { createContext } from "react";

export const ModalContext = createContext(null);

const Modal = ({ children }) => {
  const [isHide, setIsHide] = useState(true);

  const hideModal = () => {
    setIsHide(true);
  };

  const showModal = () => {
    setIsHide(false);
  };

  return (
    <ModalContext.Provider
      value={{ isHide: isHide, hideModal: hideModal, showModal: showModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default Modal;
