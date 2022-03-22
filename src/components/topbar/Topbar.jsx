import React from "react";
import "./topbar.css";
import {
  LanguageOutlined,
  NotificationsNoneOutlined,
  SettingsOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <Link to="/" className="link">
          <div className="topLeft">
            <span className="logo">L.R Admin</span>
          </div>
        </Link>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNoneOutlined />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <LanguageOutlined />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <SettingsOutlined />
          </div>
          <img
            src="https://scontent.fcpq5-1.fna.fbcdn.net/v/t1.6435-9/147472402_2773008959582728_7121946917656230673_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFHckbD0H4UipWQPIbzUBRZeVh37vh-lzZ5WHfu-H6XNjyypgANT3mar3x4QxpEU4mqW8nKECDNSFlWVzkaUkdw&_nc_ohc=eQhlavZtWU8AX-sejY6&_nc_ht=scontent.fcpq5-1.fna&oh=00_AT-jvVXOYBMf1oDKhknuNjZHXppk2-CszwD2PE1qybK0iw&oe=6235E0C9"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
