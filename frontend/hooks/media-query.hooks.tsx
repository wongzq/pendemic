import { useMediaQuery } from "react-responsive";

const useDimensions = () => {
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

  const is320 = is320Browser || is320Device;
  const is480 = is480Browser || is480Device;
  const is768 = is768Browser || is768Device;
  const is1024 = is1024Browser || is1024Device;
  const is1200 = is1280Browser || is1280Device;

  const isMini = !is320;
  const isMobile = is320 && !is480;
  const isTabletPortrait = is480 && !is768;
  const isTabletLandscape = is768 && !is1024;
  const isLaptop = is1024 && !is1200;
  const isDesktop = is1200;

  isMini && console.log("Mini: " + isMini);
  isMobile && console.log("Mobile: " + isMobile);
  isTabletPortrait && console.log("TabletPortrait: " + isTabletPortrait);
  isTabletLandscape && console.log("TabletLandscape: " + isTabletLandscape);
  isLaptop && console.log("Laptop: " + isLaptop);
  isDesktop && console.log("Desktop: " + isDesktop);

  return {
    isMini,
    isMobile,
    isTabletPortrait,
    isTabletLandscape,
    isLaptop,
    isDesktop,
  };
};

const MediaQueryHooks = {
  useDimensions,
};

export default MediaQueryHooks;
