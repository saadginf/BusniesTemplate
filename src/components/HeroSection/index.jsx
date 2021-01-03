import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HerBtnWraper,
  HeroContent,
  HeroH1,
  HeroP,
} from "./HeroSecElements";
import video from "../../videos/video.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../ButtonElement";
const HeroSection = () => {
  const [hover, sethover] = useState(false);
  const onHover = () => {
    sethover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>
          Sign up for new account today and receive 250$ in credit towords your
          next payment.
        </HeroP>
        <HerBtnWraper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary
            dark
          >
            Get Sarted{" "}
            {hover ? (
              <FontAwesomeIcon icon={faArrowRight} />
            ) : (
              <FontAwesomeIcon icon={faAngleRight} />
            )}
          </Button>
        </HerBtnWraper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
