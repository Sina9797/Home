import React from "react";
import { faBars, faCoffee, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

function Header() {
  const [oppen, setOppen] = useState(false);

  const handleClick = () => {
    setOppen(!oppen);
  };
  return (
    <>
      <div id="A">
        <div id="keshoo" className={`d-md-none${oppen ? " Active" : ""}`}>
          <div id="birr">
            <span>iHOME</span>
            <FontAwesomeIcon
              className="btn"
              icon={faBars}
              onClick={handleClick}
            />
          </div>
          <div id="birrr">
            <div id="zoroo">
              <div id="C">
                <img src="A.jpg" />
              </div>
              <lable htmlFor="C">
                <a href="">Michael</a>
              </lable>
            </div>
            <div id="zoro">
              <span>
                <a href="#">VIP</a>
              </span>
              <span>
                <a href="#">CLUBS</a>
              </span>
              <span>
                <a href="#">BLOGS</a>
              </span>
              <span>
                <a href="#">NEWS</a>
              </span>
            </div>
          </div>
        </div>
        <div className="header d-none d-md-flex">
          <div id="D">
            <div id="C">
              <img src="A.jpg" />
            </div>
            <lable htmlFor="C">
              <a href="">Michael</a>
            </lable>
          </div>
          <div id="E">
            <span>
              <b>iHOME</b>
            </span>
          </div>
          <div id="F">
            <a href="#">VIP</a>
            <a href="#">CLUBS</a>
            <a href="#">BLOGS</a>
            <a href="#">NEWS</a>
          </div>
        </div>
        <div id="B">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <img src="new1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="new2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="new3.jpg" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Header;
