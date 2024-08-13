import React from "react";
import "./Footer.scss";
import { Link, NavLink } from "react-router-dom";
import {
  faAndroid,
  faInstagram,
  faWebAwesome,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocation,
  faPhone,
  faSitemap,
} from "@fortawesome/free-solid-svg-icons";
import { faMap, faMessage } from "@fortawesome/free-regular-svg-icons";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons/faLocationPin";
function Footer() {
  return (
    <>
      <div id="AJ">
        <div>
          <h3>QUICK ACCESS</h3>
          <a href="/">Buy</a>
          <a href="/">Sell</a>
          <a href="/">Rent</a>
          <a href="/">COMMERCIAL </a>
        </div>
        <div>
          <h3>Cities</h3>
          <a href="/">paris</a>
          <a href="/">Madrid</a>
          <a href="/">Stockholm</a>
        </div>
        <div>
          <h3>iHome</h3>
          <a href="/">Contact Us</a>
          <a href="/">About Us</a>
          <a href="/">Our Convertor</a>
          <a href="/">Turres </a>
        </div>
        <div>
          <h3>iHome</h3>
          <div id="AK">
            <Link>
              <img src="FF.jpg" />
            </Link>
            <Link>
              <img src="EE.png" />
            </Link>
            <Link>
              <img src="GG.png" />
            </Link>
            <Link>
              <img src="HH.png" />
            </Link>
          </div>
          <div className="mt-3">
            <a href="/">
              <FontAwesomeIcon id="AM" icon={faPhone} /> +99 676 767 767{" "}
            </a>
            <a href="/">
              {" "}
              <FontAwesomeIcon icon={faMessage} /> www.iHOME.com
            </a>
            <a href="/">
              <FontAwesomeIcon icon={faLocationPin} /> wdw wewe dwdw
            </a>
          </div>
        </div>
        <div id="AL">
          <h3>Applications</h3>
          <Link>
            <img src="apple.png" />
          </Link>
          <Link>
            <img src="play.webp" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Footer;
