import React from "react";
import { AirdropBanner, Hero, How, Timeline, Tokenomics } from "../Components";
import { MotionAnimate } from "react-motion-animate";

const Home = () => {
  return (
    <div>
      <MotionAnimate animation="fadeInUp" reset={true}>
        <Hero />
      </MotionAnimate>

      <MotionAnimate animation="fadeInUp" reset={true}>
        <AirdropBanner />
      </MotionAnimate>

      <MotionAnimate animation="fadeInUp" reset={true}>
        <How />
      </MotionAnimate>

      <MotionAnimate animation="fadeInUp" reset={true}>
        <Tokenomics />
      </MotionAnimate>

      <MotionAnimate animation="fadeInUp" reset={true}>
        <Timeline />
      </MotionAnimate>
    </div>
  );
};

export default Home;
