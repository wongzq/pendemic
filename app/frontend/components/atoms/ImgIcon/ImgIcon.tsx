import React from "react";
import Image from "next/image";
import Pendemic from "@assets/img/logo-pendemic.png";
import PendemicDark from "@assets/img/logo-pendemic-dark.png";
import LogoGoogle from "@assets/img/logo-google.png";
import LogoFacebook from "@assets/img/logo-facebook.png";

export enum ImgIcons {
  LogoPendemic,
  LogoPendemicDark,
  LogoGoogle,
  LogoFacebook,
}

type ImgIconProps = { img: ImgIcons; className?: string };

const ImgIcon: React.FC<ImgIconProps> = ({ img, className = "" }) => {
  switch (img) {
    case ImgIcons.LogoPendemic:
      return (
        <div className={className}>
          <Image
            layout="intrinsic"
            width={40}
            height={40}
            src={Pendemic}
            alt="Logo"
          />
        </div>
      );

    case ImgIcons.LogoPendemicDark:
      return (
        <div className={className}>
          <Image
            layout="intrinsic"
            width={40}
            height={40}
            src={PendemicDark}
            alt="Logo"
          />
        </div>
      );

    case ImgIcons.LogoGoogle:
      return (
        <Image width={36} height={36} layout="intrinsic" src={LogoGoogle} />
      );

    case ImgIcons.LogoFacebook:
      return (
        <Image width={36} height={36} layout="intrinsic" src={LogoFacebook} />
      );

    default:
      return null;
  }
};

export default ImgIcon;
