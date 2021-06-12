import React from "react";
import { useMediaQuery } from "react-responsive";

const useDimensions = () => {
  const [is320, setIs320] = React.useState(false);
  const [is480, setIs480] = React.useState(false);
  const [is768, setIs768] = React.useState(false);
  const [is1024, setIs1024] = React.useState(false);
  const [is1200, setIs1200] = React.useState(false);

  const is320Browser = useMediaQuery({ minWidth: 320 });
  const is480Browser = useMediaQuery({ minWidth: 480 });
  const is768Browser = useMediaQuery({ minWidth: 768 });
  const is1024Browser = useMediaQuery({ minWidth: 1024 });
  const is1280Browser = useMediaQuery({ minWidth: 1280 });

  const is320Device = useMediaQuery({ minDeviceWidth: 320 });
  const is480Device = useMediaQuery({ minDeviceWidth: 480 });
  const is768Device = useMediaQuery({ minDeviceWidth: 768 });
  const is1024Device = useMediaQuery({ minDeviceWidth: 1024 });
  const is1280Device = useMediaQuery({ minDeviceWidth: 1280 });

  React.useEffect(() => {
    setIs320(is320Browser || is320Device);
    setIs480(is480Browser || is480Device);
    setIs768(is768Browser || is768Device);
    setIs1024(is1024Browser || is1024Device);
    setIs1200(is1280Browser || is1280Device);
  });

  return {
    is320,
    is480,
    is768,
    is1024,
    is1200,
  };
};

const DimensionsHooks = {
  useDimensions,
};

export default DimensionsHooks;
