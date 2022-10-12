import React, { useState } from "react";
import { CgMenuMotion } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";

import classes from "./Header.module.css";
import orgLogo from "../../Assets/eximious-logo.png";
import littleLogo from "../../Assets/Little_logo.jpg";
import adminPhoto from "../../Assets/admin.jpg";
import { useHistory } from "react-router-dom";
import ChangePassword from "../Dashboard/ChangePassword";
import { GrClose } from "react-icons/gr";

const NOTIFICATION_DATA = [
  {
    title: "Another meeting today,",
    status: " at 12:00 PM",
    time: "Just Now"
  },
  {
    title: "Application",
    status: " Error",
    time: "Just Now"
  },
  {
    title: "New User Registration",
    time: "2 days ago"
  },
  {
    title: "Application",
    status: " Error",
    time: "2 days ago"
  }
];

const Nav = (props) => {
  const history = useHistory();
  const [isAdminPhotoClicked, setIsAdminPhotoClicked] = useState(false);
  const [isNotificationIconClicked, setIsNotificationIconClicked] = useState(false);
  const [isChangePasswordClicked, setIsChangePasswordClicked] = useState(false);
  const [isSaveNewPasswordClicked, setIsSaveNewPasswordClicked] = useState(false);

  const sideMenuClickHandler = () => {
    props.sideMenuOpen();
  };

  const adminPhotoClickHandler = () => {
    setIsNotificationIconClicked(false);
    setIsAdminPhotoClicked(prev => !prev);
  }

  const notificationIconClicked = () => {
    setIsAdminPhotoClicked(false);
    setIsNotificationIconClicked(prev => !prev);
  }

  const changePasswordHandler = () => {
    setIsAdminPhotoClicked(false);
    setIsChangePasswordClicked(true);
  }

  const saveNewPasswordClickHandler = () => {
    setIsSaveNewPasswordClicked(true);
    setIsChangePasswordClicked(false);
  }

  return (
    <React.Fragment>
      <div className={classes.container}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <CgMenuMotion
            style={{ fontSize: "25px", cursor: "pointer" }}
            onMouseEnter={sideMenuClickHandler}
          />
          <img src={littleLogo} alt="" className={classes.littleLogo} />
        </div>
        <div className={classes.orgDetails}>
          <img src={orgLogo} alt="" className={classes.logo} />
          <div className={classes.notification}>
            <IoMdNotificationsOutline onClick={notificationIconClicked} />
          </div>
          {isNotificationIconClicked &&
            <div className={classes.notificationPanel} >
              <div style={{ marginTop: "-1px", height: "5px", backgroundColor: "red", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}></div>
              <div style={{ padding: "10px 15px" }}>Notification</div>
              <hr />
              {NOTIFICATION_DATA.map(ele => {
                return (
                  <div style={{ padding: "15px", paddingBottom: "0" }}>
                    <span style={{ fontSize: "13px" }}>{ele.title}</span><span style={{ fontSize: "13px", color: "rgba(245, 174, 48, 255)" }}>{ele.status}</span>
                    <p style={{ fontSize: "11px", color: "gray" }}>{ele.time}</p>
                  </div>
                )
              })}
            </div>
          }
          <img src={adminPhoto} alt="" className={classes.adminPhoto} onClick={adminPhotoClickHandler} />
          {isAdminPhotoClicked &&
            <div className={classes.adminPanel} >
              <div style={{ backgroundColor: "rgba(34, 137, 203, 255)", color: "white", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", margin: "-1px" }}>
                <p style={{ fontSize: "13px", padding: "0 20px", paddingBottom: "0", paddingTop: "10px" }}>Jay Shah</p>
                <p style={{ fontSize: "9px", padding: " 0 20px", paddingBottom: "10px", marginTop: "0px" }}>Admin of the eximious global</p>
              </div>
              <p style={{ fontSize: "11px", padding: "8px", paddingLeft: "20px", cursor: "pointer", height: "30px" }} onClick={changePasswordHandler} >Change Password</p>
              <hr style={{ color: "gray" }} />
              <p onClick={() => {
                window.location.reload();
                history.push("/login");
              }} style={{ cursor: "pointer", fontSize: "11px", padding: "8px", paddingLeft: "20px", height: "30px" }}>Logout</p>
            </div>
          }
        </div>
      </div>
      {isChangePasswordClicked &&
        <ChangePassword close={setIsChangePasswordClicked} saveNewPassword={saveNewPasswordClickHandler} />
      }
      {isSaveNewPasswordClicked &&
        <div className={classes.passwordChangedContainer}>
          <div className={classes.passwordChangedMessage}>
            <div className={classes.successHeader}>
              <div>Success</div>
              <GrClose onClick={() => setIsSaveNewPasswordClicked(false)} style={{cursor: "pointer"}} />
            </div>
            <hr />
            <div className={classes.passwordText}>Your password is successfully updated.</div>
            {/* <button className={classes.passwordOk} onClick={() => setIsSaveNewPasswordClicked()} >Ok</button> */}
          </div>
        </div>
      }
    </React.Fragment>
  );
};

export default Nav;