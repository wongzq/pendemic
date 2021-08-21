import styles from "./Hoverable.module.scss";

import React from "react";
import classNames from "classnames";
import S from "./Hoverable.styled";
import { Coord, DivMouseEvent } from "./Hoverable.type";

// --------------------------------------------------------------------------------
// Hoverable Underline
// --------------------------------------------------------------------------------
type UnerlineState = "HIDDEN" | "VISIBLE" | "EXPANDED";

type UnderlineProps = {
  color: "lavender" | "ember";
  height?: 2 | 4;
  delayed?: boolean;
  centered?: boolean;
  freeze?: boolean;
};

const Underline: React.FC<UnderlineProps> = ({
  color,
  height,
  delayed = false,
  centered = false,
  freeze = false,
  children,
}) => {
  // useState
  const [hoverState, setHoverState] = React.useState<UnerlineState>("HIDDEN");

  // custom functions
  const onFocus = () => {
    if (delayed) {
      setHoverState((prev) => (prev === "EXPANDED" ? "EXPANDED" : "VISIBLE"));

      const setHoverExpanded = () =>
        setHoverState((prev) =>
          prev === "VISIBLE" || prev === "EXPANDED" ? "EXPANDED" : "HIDDEN"
        );
      setTimeout(setHoverExpanded, 300);
    } else {
      setHoverState("EXPANDED");
    }
  };

  const onBlur = () => setHoverState("HIDDEN");

  const hoverableProps = {
    onMouseUp: onBlur,
    onMouseLeave: onBlur,
    onMouseDown: onFocus,
    onMouseEnter: onFocus,
  };

  // component
  return (
    <S.UnderlineContainer {...hoverableProps}>
      {/* children component */}
      {children}

      {/* animated underline */}
      {freeze ? (
        <S.Underline
          color={color}
          height={height ?? 2}
          centered={centered}
          hoverState={hoverState}
          freeze={freeze}
        />
      ) : (
        <S.Underline
          color={color}
          height={height ?? 2}
          centered={centered}
          hoverState={hoverState}
          freeze={freeze}
        />
      )}
    </S.UnderlineContainer>
  );
};

// --------------------------------------------------------------------------------
// Hoverable Fade
// --------------------------------------------------------------------------------
type FadeProps = {
  origin: JSX.Element;
  hovered: JSX.Element;
};

const Fade: React.FC<FadeProps> = ({ origin, hovered }) => {
  // useState
  const [isHovered, setIsHovered] = React.useState(false);

  // custom variables
  const hoverableProps = {
    className: styles["hoverable-fade"],
    onMouseUp: () => setIsHovered(false),
    onMouseLeave: () => setIsHovered(false),
    onMouseDown: () => setIsHovered(true),
    onMouseEnter: () => setIsHovered(true),
  };

  const originHoverableProps = {
    className: classNames(styles["hoverable-fade--origin"], {
      [styles["hoverable-fade--visible"]]: !isHovered,
      [styles["hoverable-fade--hidden"]]: isHovered,
    }),
  };

  const hoveredHoverableProps = {
    className: classNames(styles["hoverable-fade--focused"], {
      [styles["hoverable-fade--visible"]]: isHovered,
      [styles["hoverable-fade--hidden"]]: !isHovered,
    }),
  };

  const NewOrigin = React.createElement(origin.type, {
    ...origin.props,
    ...originHoverableProps,
  });

  const NewHovered = React.createElement(hovered.type, {
    ...hovered.props,
    ...hoveredHoverableProps,
  });

  // component
  return (
    <div {...hoverableProps}>
      {NewOrigin}
      {NewHovered}
    </div>
  );
};

// --------------------------------------------------------------------------------
// Hoverable Ripple
// --------------------------------------------------------------------------------
type RippleProps = {
  color?: "white" | "grey";
};

const Ripple: React.FC<RippleProps> = ({ color = "white" }) => {
  // useState
  const [coords, setCoords] = React.useState<Coord>({ x: -1, y: -1 });
  const [isRippling, setIsRippling] = React.useState(false);

  // useEffect
  React.useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      timeoutId = setTimeout(() => setIsRippling(false), 750);
    } else {
      setIsRippling(false);
    }

    return () => timeoutId && clearTimeout(timeoutId);
  }, [coords]);

  React.useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 });
  }, [isRippling]);

  // custom functions
  const onClick = (e: DivMouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  // component
  return (
    <S.RippleContainer onClick={onClick}>
      {isRippling && (
        <S.Ripple color={color} x={coords.x} y={coords.y} />
      )}
    </S.RippleContainer>
  );
};

const Hoverable = {
  Underline,
  Fade,
  Ripple,
};

export default Hoverable;
