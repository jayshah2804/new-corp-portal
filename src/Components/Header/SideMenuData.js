import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdOutlineDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";

import classes from "./SideMenuData.module.css";

const SideMenuData = ({ main, sub }) => {
  const [subMenuIsAvtive, setSubMenuIsActive] = useState(false);
  return (
    <React.Fragment>
      <div className={classes.menu}>
        <MdOutlineDashboard className={classes.frontIcons} />
        {/* <NavLink to="#"
          className={classes.mainMenu}
          onClick={() => setSubMenuIsActive((prev) => !prev)}
        >
          {main}
        </NavLink> */}
        <div to="#"
          className={classes.mainMenu}
          onClick={() => setSubMenuIsActive((prev) => !prev)}
        >
          {main}
        </div>
        {sub && (
          <div className={classes.dropIcons} >
            {subMenuIsAvtive ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </div>
        )}
      </div>
      {subMenuIsAvtive && <div>{sub && sub.map((ele) => <p className={classes.subMenu}>{ele}</p>)}</div>}
    </React.Fragment>
  );
};

export default SideMenuData;