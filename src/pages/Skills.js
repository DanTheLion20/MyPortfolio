/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image1 from "../img/CitrusAnime.png";
import Image2 from "../img/PalawanWebsite.png";
import Image3 from "../img/DripSole.png";

const Skills = () => {
  const openLinkInNewTab = (link) => {
    window.open(link, "_blank");
  };

  return (
    <>
      <div className="container mp">
        <h1 className="title">Portfolio and Previous Projects</h1>
        <p className="mb-5 pb-5 mt-2">
          I have built various different projects to fit different aspects of
          the client's business. If you want to see more examples of my work
          than the ones showcased in this site, please contact me!
        </p>
        <div className="row mb-5">
          <div className="col-4">
            <div
              className="card bg-transparent border border-light"
              onClick={() => openLinkInNewTab("https://danthelion20.github.io/Citrus-Anime/")} 
              style={{ cursor: "pointer" }}
            >
              <div className="Image">
                <img
                  className="card-image w-100 img-fluid px-2 py-2"
                  src={Image1}
                />
              </div>
              <div className="card-body">
                <h2 className="card_text">Anime Website:</h2>
                <h3 className="card_text">Citrus Anime</h3>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div
              className="card bg-transparent border border-light"
              onClick={() => openLinkInNewTab("https://danthelion20.github.io/Palawan/")} 
              style={{ cursor: "pointer" }}
            >
              <div className="Image">
                <img
                  className="card-image w-100 img-fluid px-2 py-2"
                  src={Image2}
                />
              </div>
              <div className="card-body">
                <h2 className="card_text">Travel Website:</h2>
                <h3 className="card_text">Palawan</h3>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div
              className="card bg-transparent border border-light"
              onClick={() => openLinkInNewTab("https://danthelion20.github.io/Drip-Sole/")} 
              style={{ cursor: "pointer" }}
            >
              <div className="Image">
                <img
                  className="card-image w-100 img-fluid px-2 py-2"
                  src={Image3}
                />
              </div>
              <div className="card-body">
                <h2 className="card_text">Ecommerce Website:</h2>
                <h3 className="card_text">Drip Sole</h3>
              </div>
            </div>
          </div>
          <div className="col-4"></div>
          <div className="col-4"></div>
        </div>
      </div>
    </>
  );
};

export default Skills;
