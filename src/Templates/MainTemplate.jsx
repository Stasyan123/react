import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Modal from "../components/Modal";

const MainTemplate = () => {
  return (
    <div>
      <Navbar />

      <div className="page-content">
        <Modal>
          <Outlet />
        </Modal>
      </div>
    </div>
  );
};

export default MainTemplate;
