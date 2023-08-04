import React from "react";
import { AirdropBanner, Hero, Timeline, Tokenomics } from "../Components";
import { MotionAnimate } from "react-motion-animate";

const Home = () => {
  return (
    <div>
      <MotionAnimate animation="fadeInUp" reset={true}>
        <Hero />
      </MotionAnimate>
      
      <MotionAnimate animation="fadeInUp" reset={true}>
      <AirdropBanner/>
      </MotionAnimate>

      <MotionAnimate animation="fadeInUp" reset={true}>
        <Timeline />
      </MotionAnimate>

      <MotionAnimate animation="fadeInUp" reset={true}>
        <Tokenomics />
      </MotionAnimate>
    </div>
  );
};

export default Home;
