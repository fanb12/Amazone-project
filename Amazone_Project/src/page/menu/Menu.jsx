import React from "react";
import { IoMdContact } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import classes from "./menu.module.css";
function Menu() {
  const onClick = () => {};
  return (
    <div className={classes.container}>
      <div className={classes.both}>
        <button className={classes.sign}>
          <IoMdContact size={30} className={classes.con} />
          <p> Hello, sign in</p>
        </button>
        <button className="cancel-button" onClick={() => onClick()}>
          X
        </button>
      </div>
      <ul>
        <h3>Digital Content & Devices</h3>
        <li>
          <a href="">Amazon Music</a>
          <IoIosArrowForward
            style={{
              marginLeft: "180px",
            }}
          />
        </li>
        <li>
          <a href="">Kindle E-readers & Books</a>
          <IoIosArrowForward
            style={{
              marginLeft: "118px",
            }}
            className={classes.left}
          />
        </li>
        <li>
          <a href="">Amazon Appstore </a>
          <IoIosArrowForward
            className={classes.left}
            style={{
              marginLeft: "160px",
            }}
          />
        </li>
      </ul>
      <ul>
        <h3>Shop by Department</h3>
        <li>
          <a href="">Electronics </a>
          <IoIosArrowForward
            className={classes.left}
            style={{
              marginLeft: "200px",
            }}
          />
        </li>
        <li>
          <a href="">Computers </a>
          <IoIosArrowForward
            className={classes.left}
            style={{
              marginLeft: "200px",
            }}
          />
        </li>
        <li>
          <a href="">Smart Home </a>
          <IoIosArrowForward
            className={classes.left}
            style={{
              marginLeft: "190px",
            }}
          />
        </li>
        <li>
          <a href="">Arts & Crafts </a>
          <IoIosArrowForward
            className={classes.left}
            style={{
              marginLeft: "190px",
            }}
          />
        </li>
        <li>
          <a href="">See all</a>
          <IoIosArrowDown
            style={{
              marginLeft: "10px",
            }}
          />
        </li>
      </ul>
      <ul>
        <h3>Programs & Features</h3>

        <li>
          <a href="">Gift Cards</a>
          <IoIosArrowForward
            className={classes.left}
            style={{
              marginLeft: "210px",
            }}
          />
        </li>
        <li>
          <a href="">Shop By Interest </a>
        </li>
        <li>
          <a href="">Amazon Live </a>
          <IoIosArrowForward
            className={classes.left}
            style={{
              marginLeft: "190px",
            }}
          />
        </li>
        <li>
          <a href="">International Shopping </a>
          <IoIosArrowForward
            className={classes.left}
            style={{
              marginLeft: "135px",
            }}
          />
        </li>
        <li>
          <a href="">See all</a>
          <IoIosArrowDown
            style={{
              marginLeft: "10px",
            }}
          />
        </li>
      </ul>
      <ul className={classes.last}>
        <h3>Help & Settings</h3>
        <li>
          <a href=""> Your Account</a>
        </li>
        <li>
          <TbWorld size={15} className={classes.wo} />
          <a href=""> English </a>
        </li>
        <li>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-flag_of_the_united_states.svg.png"
            alt=""
          />
          <a href="">United States</a>
        </li>
        <li>
          <a href=""> Customer Service </a>
        </li>
        <li>
          <a href="">Sign in</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
