import { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import Menus from "./Menus";
import { NavigationContext } from "../../../contentApi/navigationProvider";

const NavigationManu = () => {
  const { navigationOpen, setNavigationOpen } = useContext(NavigationContext);
  const pathName = useLocation().pathname;
  useEffect(() => {
    setNavigationOpen(false);
  }, [pathName]);
  return (
    <nav
      className={`nxl-navigation ${navigationOpen ? "mob-navigation-active" : ""}`}
    >
      <div className="navbar-wrapper">
        <div className="m-header">
          <Link to="/" className="b-brand">
            <img
              src="/images/logo_scalesquad_blue_horizontal.png"
              alt="logo"
              className="logo logo-lg"
              width="200"
            />
            <img
              src="/images/logo_scalesquad_blue_vertical.png"
              alt="logo"
              className="logo logo-sm"
            />
          </Link>
        </div>

        <div className={`navbar-content`}>
          <PerfectScrollbar>
            <ul className="nxl-navbar">
              <li className="nxl-item nxl-caption">
                <label>MENU</label>
              </li>
              <Menus />
            </ul>
          </PerfectScrollbar>
        </div>
      </div>
      <div
        onClick={() => setNavigationOpen(false)}
        className={`${navigationOpen ? "nxl-menu-overlay" : ""}`}
      ></div>
    </nav>
  );
};

export default NavigationManu;
