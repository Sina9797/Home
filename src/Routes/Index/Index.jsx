import React from "react";
import Product from "../../components/Product/Product";
import { Link, NavLink } from "react-router-dom";
import "./Index.scss";
import {
  faChevronLeft,
  faChevronRight,
  faCoffee,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Swiper, SwiperSlide } from "swiper/react";

import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

import { Pagination } from "swiper/modules";

function Index() {
  const [isHidden1, setIsHidden1] = useState(false);

  const toggleSlide1 = () => {
    setIsHidden1(!isHidden1);
  };
  const A = ["APARTMENT", "HOUSE", "COMMERCIAL", "RENT"];
  const B = [
    "FLOOR MATERIAL",
    "HOT WATER SUPPLIER",
    "COOLING SYSTRM",
    "HEATING SYSTEM",
  ];
  const C = [
    {
      name: "FLOOR MATERIAL",
      Options: ["A", "B", "C"],
    },
    {
      name: "HOT WATER SUPPLIER",
      Options: ["A", "B", "C"],
    },
    {
      name: "COOLING SYSTRM",
      Options: ["A", "B", "C"],
    },
    {
      name: "HEATING SYSTEM",
      Options: ["A", "B", "C"],
    },
  ];
  const D = ["ELAVATOR", "PARKING", "WAREHOUSE", "BALCONY"];
  const Fo = [
    {
      Picture: "house.jpg",
    
      description: "House ",
      city: "Madrid",
      price: "$ 750.000",
    },
    {
      Picture: "house.jpg",
    
      description: "House ",
      city: "Madrid",
      price: "$ 750.000",
    },
    {
      Picture: "house.jpg",
   
      description: "House ",
      city: "Madrid",
      price: "$ 750.000",
    },
    {
      Picture: "house.jpg",
      Title: "4 ماشین",
      description: "House ",
      city: "Madrid",
      price: "$ 750.000",
    },
    {
      Picture: "house.jpg",
   
      description: "House ",
      city: "Madrid",
      price: "$ 750.000",
    },
    {
      Picture: "house.jpg",
     
      description: "House ",
      city: "Madrid",
      price: "$ 750.000",
    },
    {
      Picture: "house.jpg",
 
      description: "House ",
      city: "Madrid",
      price: "$ 750.000",
    },
    {
      Picture: "house.jpg",
    
      description: "House ",
      city: "Madrid",
      price: "$ 750.000",
    },
    {
      Picture: "house.jpg",
     
      description: "House ",
      city: "Madrid",
      price: "$ 750.000",
    },
  ];

  return (
    <>
      <div id="G">
        {isHidden1 ? (
          <div id="BB">
            <div className="header">
              <span>WHAT'S ON YOUR MIND?</span>
              <div id="H">
                <input
                  className="form-control "
                  placeholder="Search In iHome"
                  aria-label="Search"
                />
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </div>
            <div id="K">
              <div id="M">
                {A.map((item) => (
                  <div id="N">
                    <lable id="ZIB" htmlFor={item}>
                      {item}
                    </lable>
                    <input
                      id="J"
                      className="form-check-input"
                      type="checkbox"
                    />
                  </div>
                ))}
              </div>
              <div id="P">
                {C.map((item) => (
                  <div id="S">
                    <lable id="zam">{item.name}</lable>
                    <select id="R">
                      {item.Options.map((option) => (
                        <option>{option}</option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
              <div id="MM" className="me-0">
                {D.map((item) => (
                  <div id="N">
                    <lable id="ZIB" htmlFor={item}>
                      {item}
                    </lable>
                    <input
                      id="J"
                      className="form-check-input"
                      type="checkbox"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div id="L">
              <div id="LLL">
                <span>AREA</span>
                <sub className="ms-5">BETWEEN</sub>
              </div>
              <div id="LL">
                <input type="number" />
                <span>&</span>
                <input type="number" />
              </div>
              <div id="LLLL">
                <lable>ROOM</lable>
                <input type="number" />
              </div>
            </div>
            <button onClick={toggleSlide1}>HIDE ADVANCED OPTION</button>
          </div>
        ) : (
          <div id="AA">
            <div className="header">
              <span>WHAT'S ON YOUR MIND?</span>
              <div id="H">
                <input
                  className="form-control "
                  placeholder="Search In iHome"
                  aria-label="Search"
                />
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </div>
            <div id="I">
              <div>
                <input id="J" className="form-check-input" type="checkbox" />
                <lable htmlFor="J">APARTMENT</lable>
              </div>
              <div>
                <input id="J" className="form-check-input" type="checkbox" />
                <lable htmlFor="J">HOUSE</lable>
              </div>
              <div>
                <input id="J" className="form-check-input" type="checkbox" />
                <lable htmlFor="J">COMMERCIAL</lable>
              </div>
              <div>
                <input id="J" className="form-check-input" type="checkbox" />
                <lable htmlFor="J">RENT</lable>
              </div>
            </div>
            <button onClick={toggleSlide1}>SHOW ADVANCED OPTION</button>
          </div>
        )}
      </div>

      <span id="U">SUGGESTIONS</span>
      <span id="V">
        Lorem ipsum dolor sit amet. consectetur elit. sed do eiusmod tempor
        <p className="d-sm-none">incididunt ut labore.</p><span className="d-none d-sm-flex">incididunt ut labore.</span>
      </span>
      <div id="WW">
        <div id="WWW"></div>
        <div id="W">
          {Fo.map((item) => (
            <div className="card shadow-lg ">
              <a href="/">
                <img src={item.Picture} class="card-img-top" />
                <h4 id="gheym">{item.price}</h4>
                <h3 class="card-text">{item.description}</h3>
                <p class="card-text">{item.city}</p>
                <h5 class="card-text">
                  <a href="">BUY</a>
                </h5>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div id="Y">
        <div id="ZZ">
          <button>
            <b>Buy & Sell </b>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          <button>
            {" "}
            <b>Rent </b>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          <button>
            {" "}
            <b>Show in ihome</b> <FontAwesomeIcon icon={faChevronRight} />
          </button>
          <button>
            {" "}
            <b>Price List </b>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          <button>
            {" "}
            <b> Particiption </b>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        <div id="Z">
          {" "}
          <img src="house.jpg" />
        </div>
      </div>

      <h5 id="AB">Our Pics</h5>
      <div id="AC">
        <h1>
          <FontAwesomeIcon id="icon" icon={faChevronLeft} />
        </h1>

        <div id="AD">
          <Swiper
            spaceBetween={30}
            slidesPerView={4}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper d-none d-xl-flex"
          >
            <SwiperSlide>
              <a href="/">
                <div id="AE" className="card">
                  <img src="house.jpg" />
                  <h4>Category Tide</h4>
                  <h6>Category Tide Tide</h6>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="/">
                <div id="AE" className="card">
                  <img src="house.jpg" />
                  <h4>Category Tide</h4>
                  <h6>Category Tide Tide</h6>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="/">
                <div id="AE" className="card">
                  <img src="house.jpg" />
                  <h4>Category Tide</h4>
                  <h6>Category Tide Tide</h6>
                </div>
              </a>
            </SwiperSlide>

            <SwiperSlide>
              <a href="/">
                <div id="AE" className="card">
                  <img src="house.jpg" />
                  <h4>Category Tide</h4>
                  <h6>Category Tide Tide</h6>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="/">
                <div id="AE" className="card">
                  <img src="house.jpg" />
                  <h4>Category Tide</h4>
                  <h6>Category Tide Tide</h6>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="/">
                <div id="AE" className="card">
                  <img src="house.jpg" />
                  <h4>Category Tide</h4>
                  <h6>Category Tide Tide</h6>
                </div>
              </a>
            </SwiperSlide>
          </Swiper>
          <h1>
            <FontAwesomeIcon id="iconn" icon={faChevronRight} />
          </h1>
          <Swiper
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper d-none d-sm-flex  d-xl-none "
          >
            <SwiperSlide>
              <a href="/">
                <div id="AE" className="card">
                  <img src="house.jpg" />
                  <h4>Category Tide</h4>
                  <h6>Category Tide Tide</h6>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="/">
                <div id="AE" className="card">
                  <img src="house.jpg" />
                  <h4>Category Tide</h4>
                  <h6>Category Tide Tide</h6>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="/">
                <div id="AE" className="card">
                  <img src="house.jpg" />
                  <h4>Category Tide</h4>
                  <h6>Category Tide Tide</h6>
                </div>
              </a>
            </SwiperSlide>

            <SwiperSlide>
              <a href="/">
                <div id="AE" className="card">
                  <img src="house.jpg" />
                  <h4>Category Tide</h4>
                  <h6>Category Tide Tide</h6>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="/">
                <div id="AE" className="card">
                  <img src="house.jpg" />
                  <h4>Category Tide</h4>
                  <h6>Category Tide Tide</h6>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="/">
                <div id="AE" className="card">
                  <img src="house.jpg" />
                  <h4>Category Tide</h4>
                  <h6>Category Tide Tide</h6>
                </div>
              </a>
            </SwiperSlide>
          </Swiper>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper  d-sm-none "
          >
            <SwiperSlide>
              <a href="/">
                <div id="AE" className="card">
                  <img src="house.jpg" />
                  <h4>Category Tide</h4>
                  <h6>Category Tide Tide</h6>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="/">
                <div id="AE" className="card">
                  <img src="house.jpg" />
                  <h4>Category Tide</h4>
                  <h6>Category Tide Tide</h6>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="/">
                <div id="AE" className="card">
                  <img src="house.jpg" />
                  <h4>Category Tide</h4>
                  <h6>Category Tide Tide</h6>
                </div>
              </a>
            </SwiperSlide>

            <SwiperSlide>
              <a href="/">
                <div id="AE" className="card">
                  <img src="house.jpg" />
                  <h4>Category Tide</h4>
                  <h6>Category Tide Tide</h6>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="/">
                <div id="AE" className="card">
                  <img src="house.jpg" />
                  <h4>Category Tide</h4>
                  <h6>Category Tide Tide</h6>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="/">
                <div id="AE" className="card">
                  <img src="house.jpg" />
                  <h4>Category Tide</h4>
                  <h6>Category Tide Tide</h6>
                </div>
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div id="AF"></div>
      <h2 id="AG">ABOUT iHOME</h2>
      <div id="AH">
        <span>
          eevevev egeweeeee eeerrrb rwrjowj jnvojovn nevjnov jnvoeovnonvn
          njvnononvnnv jnvoonvnvnj nvonovnv nvinvnnvn jnocnonc nconeonco
          eocooncenc
        </span>
        <span>
          mvlmvkmlmv mvllmv mkvlklv mvmmv mvklvm mvlmlmv mlvmmv mvlmlmv{" "}
        </span>
        <span>
          vpmvmvmkmv vvmkvmmkvmmv mvkmkmvmmvmmv mvkmmvmvm mvkkvmmkmv mkmkmkmm
          mkvmkmkm mkvmmmvm
        </span>
        <span>vlklnv vmklkmmvk mvkmmvm mvkmmv mvmmlv vmlkv mvklv</span>
        <span>
          vmvmkvmmvm mvkmkmkmv mkvmlkmlkvm lkmvkkmkmvm kmvkmlkkmv mvkmmlv
          mvlkklvm
        </span>
      </div>

      <div id="AI">
        <img src="BB.jpg" />
        <img src="CC.jpg" />
        <img src="DD.jpg" />
      </div>
    </>
  );
}

export default Index;
