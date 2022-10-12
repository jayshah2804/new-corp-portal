import React from "react";
import classes from "./SideMenu.module.css";
import SideMenuData from "./SideMenuData";
import { GrClose } from "react-icons/gr";

const DUMMY_MENU_DATA = [
  {
    main: "Dashboard",
  },
  {
    main: "Student Department",
    sub: ["Employees", "Delete Employees", "Private Drive"],
  },
  {
    main: "S.S Divine School",
    sub: ["Departments", "Admins", "Trips", "Budget & Insurance"],
  },
  {
    main: "Departments",
  },
];

const SideMenu = (props) => {
  return (
    <div className={classes.menuContainer}>
      <div className={classes.subMenu} onMouseLeave={() => props.sideMenuClose()} >
        <div className={classes.closeIcon} onClick={() => props.sideMenuClose()} >
          <GrClose />
        </div>
        {DUMMY_MENU_DATA.map(({ main, sub }) => {
          return <SideMenuData main={main} sub={sub} />;
        })}
      </div>
    </div>
  );
};

export default SideMenu;