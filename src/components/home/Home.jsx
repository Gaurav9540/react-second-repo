import React from "react"
// import AboutCard from "../about/AboutCard"
// import Hblog from "./Hblog"
import HAbout from "./HAbout"
import Hero from "./hero/Hero"
// import Hprice from "./Hprice"    ------------------------ // pricing and pakages
// import Testimonal from "./testimonal/Testimonal"   ------------- // testimonal file path

const Home = () => {
  return (
    <>
      <Hero />
      {/* <AboutCard /> */}
      <HAbout />
      {/* <Testimonal /> */}          {/*testimonal file */}
      {/* <Hblog /> */}
      {/* <Hprice /> */}              {/*for pricing and pakages*/}
    </>
  )
}

export default Home
