import React, { useEffect, useState } from "react";
import "./Portfolio.scss";
import ModalImage from "react-modal-image";

import service2 from "../../../images/error.svg";
import { Lightbox } from "react-modal-image";
import Fade from 'react-reveal/Fade';


const Portfolio = () => {
  const [open, setOpen] = useState(false);
  const closeLightbox = () => {
    setOpen(true);
  };

  // api get data
  const [data, setdata] = useState([]);
//  const {name,liveSite,githubCode,imageURL,fullImageURL}= data;
  useEffect(() => {
    fetch('https://floating-everglades-55715.herokuapp.com/portfolio')
    .then(res => res.json())
    .then(data => setdata(data))
  }, []);

  return (
    <section className="portfolio_section" id="portfolio">
      <div className="container">
      <Fade bottom>
        <div className="portfolio_header section-header">
          <h1>
            My <span>Portfolio</span>
            {/* <h2>data: {data.length}</h2> */}
          </h1>
        </div>
        </Fade>
        <div className="row">
          
        {data.length === 0 && (
            <div class="prt_spinner">
            <div class="spinner-grow spinnerColor" role="status">
  <span class="sr-only">Loading...</span>
</div>
            </div>
          )}
       {
         data.map(data => (
          <div className="col-md-4">
            <Fade bottom
        duration='1000'
        >
          <div className="portfolio_box text-center">
            <div className="portfolio_img ">
              <ModalImage small={data.imageURL} large={data.fullImageURL} alt="" />
              {/* <img src={data.imageURL} alt="" /> */}
              <h5>{data.name}</h5>
            </div>
            <div className="portfolio_btn">
              <a className="live-btn" href={data.liveSite}>
                Live
              </a>
              <a className="github-btn" href={data.githubCode}>
                Code
              </a>
            </div>
          </div>
          </Fade>
        </div>
         ))
       }


        </div>
      </div>
    </section>
  );
};

export default Portfolio;
