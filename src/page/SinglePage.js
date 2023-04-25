import React from "react";
import { useLocation } from "react-router-dom";

const SinglePage = () => {
  const location = useLocation();
  // console.log(location);
  return (
    <div>
      <div className="ProductContainer">
        <div className="product">
          <div className="topimg">
            <img src={location.state.img} alt="" />
          </div>
          <div className="productname">
            <h3>{location.state.title}</h3>
            <div className="hashtag">
              <span>{location.state.location}</span>
              <span>{location.state.adj1}</span>
              <span>{location.state.adj2}</span>
              <span>{location.state.adj3}</span>
              <span>{location.state.adj4}</span>
            </div>
          </div>
          <div className="bottominfo">
            <div className="left info">
              <p>
              {location.state.desc} </p>
              <div className="seemore">點我看更多</div>
            </div>
            <div className="right info">
              <div>
                <h3>TWD {location.state.price}</h3>
                <button>選擇此行程</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
