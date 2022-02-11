import React from "react";
import Bananas from "../../img/bananas.jpg";
import Berries from "../../img/berries.jpg";
import Blueberries from "../../img/blueberries.jpg";
import Lime from "../../img/lime.jpg";
import Oranges from "../../img/oranges.jpg";
import Pomegranate from "../../img/pomegranate.jpg";

const Photos = () => {
  return (
    <div className="containerPhotos">
      <div className="photos">
        <div className="col1">
          <div className="columnPhoto">
            <img className="photo p1" src={Berries} alt="Berries" />
          </div>
          <div className="columnPhoto gm1">
            <img className="photo p1" src={Blueberries} alt="Blueberries" />
            <img className="photo p1" src={Lime} alt="Lime" />
          </div>
        </div>
        <div className="col1">
          <div className="columnPhoto">
            <img className="photo p2" src={Bananas} alt="Bananas" />
            <img className="photo p1" src={Oranges} alt="Oranges" />
          </div>
          <div className="columnPhoto gm2">
            <img className="photo p1" src={Pomegranate} alt="Pomegranate" />
            <img className="photo p1" src={Lime} alt="Lime" />
          </div>
        </div>
        <div className="col1">
          <div className="columnPhoto gm3">
            <img className="photo p1" src={Berries} alt="Berries" />
            <img className="photo p1" src={Bananas} alt="Bananas" />
          </div>
          <div className="columnPhoto gm4">
            <img className="photo p1" src={Oranges} alt="Oranges" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photos;
