import React from "react";
import React, { useState } from "react";
import logo from "../../imgs/logo.png";
import { AiOutlineSearch } from "react-icons/ai";

const Banner = (props) => {
   const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span>
            {" "}
            A place to{" "}
            <span
              id="word-get"
              onClick={() => {
                setIsVisible(!isVisible);
              }}
            >
              get
            </span>{" "}
          </span>
          {isVisible ? (
            <input
              id="search-box"
              className="rounded mx-4 px-4 py-2 w-25"
              placeholder="What is it that you truly desire?"
              onChange={onChangeHandler}
            />
            
          ) : (
            <span>&nbsp;</span>
          )}
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
