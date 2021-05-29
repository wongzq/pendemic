import React from "react";

const usePendemicHover = () => {
  const refSvgPlan = React.useRef<SVGSVGElement>(null);
  const refSvgWrite = React.useRef<SVGSVGElement>(null);

  const refTxtPlan = React.useRef<HTMLDivElement>(null);
  const refTxtWrite = React.useRef<HTMLDivElement>(null);

  const [planHovered, setPlanHovered] = React.useState(false);
  const [writeHovered, setWriteHovered] = React.useState(false);

  React.useEffect(() => {
    if (refSvgPlan.current) {
      const svg = refSvgPlan.current;
      svg.addEventListener("mouseover", () => setPlanHovered(true));
      svg.addEventListener("mouseout", () => setPlanHovered(false));
    }
    if (refSvgWrite.current) {
      const svg = refSvgWrite.current;
      svg.addEventListener("mouseover", () => setWriteHovered(true));
      svg.addEventListener("mouseout", () => setWriteHovered(false));
    }

    if (refTxtPlan.current) {
      refTxtPlan.current.addEventListener("mouseover", () =>
        setPlanHovered(true)
      );
      refTxtPlan.current.addEventListener("mouseout", () =>
        setPlanHovered(false)
      );
    }
    if (refTxtWrite.current) {
      refTxtWrite.current.addEventListener("mouseover", () =>
        setWriteHovered(true)
      );
      refTxtWrite.current.addEventListener("mouseout", () =>
        setWriteHovered(false)
      );
    }
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

const HomePageHooks = { usePendemicHover };

export default HomePageHooks;
