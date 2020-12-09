import React from "react";
import { InfoSection } from "../../components";
import Skills from "../Skills/Skills.components";
import { homeObjOne } from "./Data";
const HomePage = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <Skills />
    </>
  );
};

export default HomePage;
