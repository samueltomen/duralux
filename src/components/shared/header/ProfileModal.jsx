import React from "react";
import { FiBell, FiLogOut, FiUser } from "react-icons/fi";

const ProfileModal = () => {
  return (
    <div className="dropdown nxl-h-item">
      <a
        href="#"
        data-bs-toggle="dropdown"
        role="button"
        data-bs-auto-close="outside"
      >
        <img
          src="/images/avatar/1.png"
          alt="user-image"
          className="img-fluid user-avtar me-0"
        />
      </a>
      <div className="dropdown-menu dropdown-menu-end nxl-h-dropdown nxl-user-dropdown">
        <div className="dropdown-header">
          <div className="d-flex align-items-center">
            <img
              src="/images/avatar/1.png"
              alt="user-image"
              className="img-fluid user-avtar"
            />
            <div>
              <h6 className="text-dark mb-0">
                Alexandra Della {/*   Badge version PRO ou autre à voir */}
                {/* <span className="badge bg-soft-success text-success ms-1">
                  PRO
                </span>*/}
              </h6>
              <span className="fs-12 fw-medium text-muted">
                alex.della@outlook.com
              </span>
            </div>
          </div>
        </div>
        <div className="dropdown"></div>
        <a href="#" className="dropdown-item">
          <i>
            <FiUser />
          </i>
          <span>Mon Profil</span>
        </a>
        <a href="#" className="dropdown-item">
          <i>
            <FiBell />
          </i>
          <span>Notifications</span>
        </a>
        <div className="dropdown-divider"></div>
        <a href="./auth-login-minimal.html" className="dropdown-item">
          <i>
            {" "}
            <FiLogOut />
          </i>
          <span>Logout</span>
        </a>
      </div>
    </div>
  );
};

export default ProfileModal;

const getColor = (item) => {
  switch (item) {
    case "Always":
      return "always_clr";
    case "Bussy":
      return "bussy_clr";
    case "Inactive":
      return "inactive_clr";
    case "Disabled":
      return "disabled_clr";
    case "Cutomization":
      return "cutomization_clr";
    default:
      return "active-clr";
  }
};
