import React from "react";
import LogoPendemic from "@img/logo-pendemic.png";
import LogoPendemicDark from "@img/logo-pendemic-dark.png";

export enum ImgIcons {
  Pendemic,
  PendemicDark,
}

type ImgIconProps = { icon: ImgIcons };

const ImgIcon: React.FC<ImgIconProps> = ({ icon }) => {
  switch (icon) {
    case ImgIcons.Pendemic:
      return <img src={LogoPendemic} alt="Pendemic Logo" />;

    case ImgIcons.PendemicDark:
      return <img src={LogoPendemicDark} alt="Pendemic Logo" />;

    default:
      return null;
  }
};

export default ImgIcon;
