import React, { MouseEvent } from "react";
import logo from "../Images/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";

//Navbar Menu Icon
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const options = [
    {
        title:"ABOUT US",
        route:"/project"
    },
    {
        title:"PROJECT",
        route:"/aboutus"
    },
    {
        title:"VOLUNTEER",
        route:"/volunteer"
    },
    {
        title:"CONTACT US",
        route:"/contact"
    }
    
  ];
  const ITEM_HEIGHT = 48;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="header_container">
      <div className="header">
        <div className="header_top">
          <div className="menuandimage">
            <div className="menucontainer">
              <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? "long-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="long-menu"
                MenuListProps={{
                  "aria-labelledby": "long-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: "20ch",
                  },
                }}
              >
                {options.map((option) => (
                  <MenuItem
                    key={option}
                    selected={option === "Pyxis"}
                    onClick={handleClose}
                  >
                    <Link to={`${option.route}`} className="linksinheadermenu">
                      {option.title}
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </div>

            <Link to="/project" >
              <img src={logo} className="logo" />
            </Link>
          </div>
        </div>
        <div className="header_bottom">
          <div className="header_bottom_left">
            <Link to="/project" className="linksinheader">
              ABOUT US
            </Link>
            <Link to="/aboutus" className="linksinheader">
              PROJECT
            </Link>
            <Link to="/volunteer" className="linksinheader">
              VOLUNTEER
            </Link>
            <Link to="/contact" className="linksinheader">
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
      <div className="balckbox"></div>
    </div>
  );
}

export default Header;



