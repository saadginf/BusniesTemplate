import React from "react";
import {
  ServicesContainer,
  ServicesCard,
  ServicesWrapper,
  ServicesH1,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";
import img1 from "../../images/svg1.svg";
import img2 from "../../images/svg2.svg";
const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={img1} />
          <ServicesH2>Reduce Expences</ServicesH2>
          <ServicesP>
            We help reduce your fess and increase yout over all revenue
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={img2} />
          <ServicesH2>Reduce Expences</ServicesH2>
          <ServicesP>
            We help reduce your fess and increase yout over all revenue
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={img1} />
          <ServicesH2>Reduce Expences</ServicesH2>
          <ServicesP>
            We help reduce your fess and increase yout over all revenue
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
