import React, { useState } from "react";
import p2 from "../../components/../images/p2.png";
import "./style.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { categories } from "../../constants/data";


// function for categories
const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <nav className="flex justify-between pl-5 pt-2 pb-2 shadow-md">
        <img
          src={p2}
          alt="there should be an icon"
          className="w-24 cursor-pointer"
        />
        <div className="flex flex-row">
          <Link to="/">
            <div className="mx-5 nav-item tracking-wide hover:font-semibold cursor-pointer mt-5 hover:text-turq hover:tracking-wider">
              HOME
            </div>
          </Link>
          <Link to="/about">
            <div className="mx-5 nav-item tracking-wide hover:font-semibold cursor-pointer mt-5 hover:text-turq hover:tracking-wider">
              ABOUT
            </div>
          </Link>
          <Link to="/contact">
            <div className="mx-5 nav-item tracking-wide hover:font-semibold cursor-pointer mt-5 hover:text-turq hover:tracking-wider">
              CONTACT
            </div>
          </Link>
          {/* categories */}
          <div className="dropdownmenu nav-item">
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              variant="text"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              Categories
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {/* menu items imported from the data.js file */}
              {categories.map(category =>(
                <><MenuItem onClick={handleClose} key={category.id}>{category.type}</MenuItem><Divider  /></>
              ))}
            </Menu>
          </div>
          {/* create blog */}
          <div className="edit-button-blog mt-3 ml-4">
            <Link to='/create' style={{textDecoration:'none'}}>
            <button class="edit-button">
              <svg class="edit-svgIcon" viewBox="0 0 512 512">
                <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
              </svg>
            </button>
            </Link>
          </div>
        </div>
        {/* logout */}
        <div className="mx-5 mt-2">
          <Link to="/login">
            <button class="Btn">
              <div class="sign">
                <svg viewBox="0 0 512 512">
                  <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                </svg>
              </div>

              <div class="text">Logout</div>
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
