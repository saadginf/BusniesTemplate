import Layout from "../Layout/Layout";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../components/InfoSection/data";
import Services from "../components/Services";
function Home() {
  return (
    <Layout>
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services /> <InfoSection {...homeObjThree} />
    </Layout>
  );
}

export default Home;
