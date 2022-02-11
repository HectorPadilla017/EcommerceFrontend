import React from "react";
import Bananas from "../../img/bananas.jpg";

import "../../../functions/CounterNumber";

const Info = () => {
  return (
    <div className="container containerInfo" id="Info">
      <div className="titles">
        <h6 className="subtitle">TRADITION AND LOVE</h6>
        <h4 className="title">HOW IT'S MADE?</h4>
      </div>
      <div className="info">
        <div className="images">
          <img className="img" src={Bananas} alt="bananas" />
          <div className="circle" />
        </div>
        <div className="conText small">
          <p className="bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            eveniet at officia ab et quis accusantium eligendi fuga vero placeat
            dignissimos vel, maxime aspernatur consequuntur quibusdam officiis
            nulla nostrum eaque!
          </p><br/>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas esse
            odit laboriosam voluptate accusamus in laudantium iure quasi dolore
            laborum officiis sapiente nihil dolorem iste illo, fuga nobis omnis
            vitae.
          </p>
        </div>
      </div>
      <div className="contCounter" id="Counter">
        <div className="conText">
          <img src="" alt="" />
          <div className="number">
            <h2
              className="counter subtitle"
              data-target="72"
              data-cero="0"
            >
              0
            </h2>
            <h5 className="subtitle is-1">L</h5>
          </div>
          <p>Bio milk & cream each day to produce ice cream.</p>
        </div>
        <div className="conText">
          <img src="" alt="" />
          <div className="number">
            <h2
              className="counter subtitle"
              data-target="16"
              data-cero="0"
            >
              0
            </h2>
            <h5 className="subtitle is-1">KG</h5>
          </div>
          <p>Fruits are added daily to our ice cream.</p>
        </div>
        <div className="conText">
          <img src="" alt="" />
          <div className="number">
            <h2
              className="counter subtitle"
              data-target="126"
              data-cero="0"
            >
              0
            </h2>
            <h5 className="subtitle is-1">P</h5>
          </div>
          <p>We put love into the production of ice cream.</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
