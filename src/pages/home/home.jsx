import Cert from "./cert/cert";
import Count from "./count/count";
import Hero from "./hero/hero";
import Info from "./info/info";
import Invest from "./invest/invest";
import Partner from "./partner/partner";
import Services from "./services/services";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Count />
      <Info />
      <Invest />
      <Cert />
      <Partner />
    </>
  );
};

export default Home;
