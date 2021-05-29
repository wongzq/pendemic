import React from "react";
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
      return <img className={className} src={Pendemic} alt="Logo" />;

    case ImgIcons.LogoPendemicDark:
      return <img className={className} src={PendemicDark} alt="Logo" />;

    default:
      return null;
  }
};

export default ImgIcon;
