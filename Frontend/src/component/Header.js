import React from "react";
import "./Header.css";
import logo from "./../imagess/logo2.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header({ username }) {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="error" />
      </Link>

      <div className="header__search">
        <div className="input__search">
          <input type="text" className="header__searchInput" />
          <SearchIcon className="header__searchIcon" />
        </div>
      </div>

      <div className="header__nav">
        {/* sign in option */}

        <div className="nav__option">
          <span className="nav__option__line-1">
            Hello {username ? username : "guest"}
          </span>
          {username ? (
            <Link to="/login">
              <span className="nav__options__line2">logout</span>
            </Link>
          ) : (
            <Link to="/login">
              <span className="nav__options__line2">Sign In</span>
            </Link>
          )}
        </div>

        {/* order options*/}
        {username !== "bipul2540" ? (
          <div className="nav__option">
            <span className="nav__option__line-1">Returns</span>
            <span className="nav__options__line-2">& order</span>
          </div>
        ) : (
          <Link to="/admin/additems">
            <div className="nav__option"> Admin </div>
          </Link>
        )}

        {/* cart options */}
        <Link to="/checkout">
          <div className="last__option">
            <ShoppingCartIcon />
            <span className="nav__options__line-1 item__counter">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
