import React from "react";
import Header from "../Header/Header";
// import About from "../About/About";
import Navbar from "../../Shared/Navbar/Navbar";
import Particles from "react-particles-js";

const Home = () => {
  return (
    <>
      <Particles
        params={{
          particles: {
            number: {
              value: 60,
              density: {
                enable: true,
                value_area: 900,
              },
              
              // shape:{
              //   type:"circle",
              //   stroke:{
              //     width:10,
              //     color:"red"
              //   }
              // }
            },
          },
        }}
      />
      <Navbar></Navbar>
      <Header></Header>
      {/* <About></About> */}
    </>
  );
};

export default Home;
