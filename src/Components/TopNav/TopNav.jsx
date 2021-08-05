import React, { useState } from "react";
import styles from "./TopNav.module.scss";
import { ReactComponent as DropdownIcon } from "../../Assets/Icon material-arrow-drop-down.svg";
import Profile from "../../Assets/Ellipse 1.png";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useLocation, useHistory } from "react-router-dom";

function TopNav({ onClick }) {
  const location = useLocation();
  const history = useHistory();

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const logout = () => {
    localStorage.removeItem("token");
    history.push("/");
  };
  const [notiDropdownOpen, setNotiDropdownOpen] = useState(false);

  const notiToggle = () => setNotiDropdownOpen((prevState) => !prevState);
  return (
    <div
      style={
        location.pathname === "/" ? { display: "none" } : { display: "block" }
      }
    >
      <div className={styles.mainContainer}>
        <div className={styles.menuContainer}>
          <i class="fas fa-bars" onClick={onClick}></i>
        </div>
        {/* <div className={styles.searchContainer}>
          <div className={styles.search}>
            <input type="text" name="" id="" placeholder="Search Dashboard" />
          </div>
          <div className={styles.button}>
            <button>Go</button>
          </div>
        </div> */}
        <div className={styles.profileContainer}>
          <Dropdown
            isOpen={dropdownOpen}
            toggle={toggle}
            className={styles.dropdown}
          >
            <DropdownToggle>
              <div className={styles.profile}>
                <div className={styles.picContainer}>
                  <img src={Profile} alt="profile" width="100%" />
                </div>
                <div className={styles.headingContainer}>
                  <h6>
                    {/* {userLogin.userInfo && userLogin.userInfo.userData.fullName} */}
                    {/* {localStorage.getItem('userInfo') && userLogin.userInfo.userData.fullName} */}
                  </h6>
                </div>
                <div className={styles.iconContainer}>
                  <DropdownIcon className={styles.icon} width="100%" />
                </div>
              </div>
            </DropdownToggle>
            <DropdownMenu style={{ width: "100%" }}>
              <DropdownItem onClick={logout}>Log out</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
