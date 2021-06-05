import React from "react";
import Image from "next/image";
import Pendemic from "@assets/img/logo-pendemic.png";
import PendemicDark from "@assets/img/logo-pendemic-dark.png";

export enum ImgIcons {
  LogoPendemic,
  LogoPendemicDark,
}

type ImgIconProps = { icon: ImgIcons; className?: string };

const ImgIcon: React.FC<ImgIconProps> = ({ icon, className = "" }) => {
  switch (icon) {
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

    default:
      return null;
  }
};

export default ImgIcon;
