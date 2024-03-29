import React from "react";
import classes from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Dropdownbutton from "./Dropdownbutton";
import { UserDataContext } from "../../utils/context/UserDataContext";
import Alert from "../other-components/Alert";

const Navbar = () => {
  const [isActive, setActive] = React.useState(false);
  const [alert, setAlert] = React.useState(false);
  const [alertMsg, setAlertMsg] = React.useState("");
  let userContext = React.useContext(UserDataContext);

  const logoTrigger = () => {
    setActive(!isActive);
  };

  const notLoggedInAlert = () => {
    setAlertMsg("Log in to see your cart.");
    setAlert(!alert);
  }

  const handleClose = () => {
    setAlert(!alert);
  }
 
  return (
    <>
    {alert && <Alert
      content={<>
          <p>{alertMsg}</p>
      </>}
      handleClose={handleClose}
    />}
      <header>
        <nav>
          <ul>
            <li
              className={`${isActive ? classes.visible : null} ${classes.one}`}
            >
              <Link to="/face" className={classes.page}>Face</Link>
            </li>
            <li
              className={`${isActive ? classes.visible : null} ${classes.two}`}
            >
              <Link to="/lips" className={classes.page}>Lips</Link>
            </li>
            <li
              className={`${isActive ? classes.visible : null} ${classes.three}`}
            >
              <Link to="/eyes" className={classes.page}>Eyes</Link>
            </li>
            <li
              className={`${classes.logo} ${classes.four}`}
              onClick={logoTrigger}
            >
              <Link to="#">
                WM
                <br />
                <span>Wonderful Makeups</span>
                <br />
                <div className={classes.menuicon}>
                  <FontAwesomeIcon icon={faBars} />
                </div>
              </Link>
            </li>
            <li
              className={`${isActive ? classes.visible : null} ${classes.five}`}
            >
              <Link to="/nails" className={classes.page}>Nails</Link>
            </li>
            <li
              className={`${isActive ? classes.visible : null} ${classes.six}`}
            >
              {userContext?.user?.type === "user" 
                ? 
                <Dropdownbutton/>
                :
                <Link to="/login" className={classes.page}>Login</Link>
              }
            </li>
            <li
              className={`${isActive ? classes.visible : null} ${classes.seven}`}
            >
              {userContext?.user?.type === "user"
                ?
                <Link to="/cart" className={classes.page}>
                  <FontAwesomeIcon icon={faShoppingBasket} className={classes.icon} />
                  <span className={classes.cartitems}>{userContext.user.cart.length}</span>
                </Link>
                :
                <Link to="#" className={classes.page}>
                  <FontAwesomeIcon icon={faShoppingBasket} className={classes.icon} onClick={notLoggedInAlert} />
                </Link>
              }
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
