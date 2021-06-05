import React from "react";

const usePendemicLogo = () => {
  const refSvgPlan = React.useRef<SVGSVGElement>(null);
  const refSvgWrite = React.useRef<SVGSVGElement>(null);

  const refTxtPlan = React.useRef<HTMLDivElement>(null);
  const refTxtWrite = React.useRef<HTMLDivElement>(null);

  const [planHovered, setPlanHovered] = React.useState(false);
  const [writeHovered, setWriteHovered] = React.useState(false);

  React.useEffect(() => {
    const refPlanHover = () => setPlanHovered(true);
    const refPlanUnhover = () => setPlanHovered(false);
    const refWriteHover = () => setWriteHovered(true);
    const refWriteUnhover = () => setWriteHovered(false);

    if (refSvgPlan.current) {
      const svg = refSvgPlan.current;
      svg.addEventListener("mouseover", refPlanHover);
      svg.addEventListener("mouseout", refPlanUnhover);
    }
    if (refSvgWrite.current) {
      const svg = refSvgWrite.current;
      svg.addEventListener("mouseover", refWriteHover);
      svg.addEventListener("mouseout", refWriteUnhover);
    }
    if (refTxtPlan.current) {
      refTxtPlan.current.addEventListener("mouseover", refPlanHover);
      refTxtPlan.current.addEventListener("mouseout", refPlanUnhover);
    }
    if (refTxtWrite.current) {
      refTxtWrite.current.addEventListener("mouseover", refWriteHover);
      refTxtWrite.current.addEventListener("mouseout", refWriteUnhover);
    }

    return () => {
      if (refSvgPlan.current) {
        refSvgPlan.current.removeEventListener("mouseover", refPlanHover);
        refSvgPlan.current.removeEventListener("mouseout", refPlanUnhover);
      }
      if (refSvgWrite.current) {
        refSvgWrite.current.removeEventListener("mouseover", refWriteHover);
        refSvgWrite.current.removeEventListener("mouseout", refWriteUnhover);
      }
      if (refTxtPlan.current) {
        refTxtPlan.current.removeEventListener("mouseover", refPlanHover);
        refTxtPlan.current.removeEventListener("mouseout", refPlanUnhover);
      }
      if (refTxtWrite.current) {
        refTxtWrite.current.removeEventListener("mouseover", refWriteHover);
        refTxtWrite.current.removeEventListener("mouseout", refWriteUnhover);
      }
    };
  }, []);

  return {
    refSvgPlan,
    refSvgWrite,
    refTxtPlan,
    refTxtWrite,
    planHovered,
    writeHovered,
  };
};

const HomePageHooks = { usePendemicLogo };

export default HomePageHooks;
