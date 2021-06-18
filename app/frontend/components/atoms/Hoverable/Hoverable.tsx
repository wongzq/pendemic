import styles from "./Hoverable.module.scss";

import React from "react";
import classNames from "classnames";
import { HoverableUnderlineLine } from "./Hoverable.styled";
import { Coord, DivMouseEvent } from "./Hoverable.model";

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
    <div className={styles["hoverable-underline"]} {...hoverableProps}>
      {/* children component */}
      {children}

      {/* animated underline */}
      {freeze ? (
        <HoverableUnderlineLine
          color={color}
          height={height ?? 2}
          className={classNames(styles["hoverable-underline__line"], {
            [styles["hoverable-underline__line--centered"]]: centered,
            [styles["hoverable-underline__line--hidden"]]:
              hoverState === "HIDDEN",
            [styles["hoverable-underline__line--visible"]]:
              hoverState === "VISIBLE",
            [styles["hoverable-underline__line--expanded"]]:
              hoverState === "EXPANDED" || freeze,
          })}
        />
      ) : (
        <HoverableUnderlineLine
          color={color}
          height={height ?? 2}
          className={classNames(styles["hoverable-underline__line"], {
            [styles["hoverable-underline__line--centered"]]: centered,
            [styles["hoverable-underline__line--hidden"]]:
              hoverState === "HIDDEN",
            [styles["hoverable-underline__line--visible"]]:
              hoverState === "VISIBLE",
            [styles["hoverable-underline__line--expanded"]]:
              hoverState === "EXPANDED",
          })}
        />
      )}
    </div>
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
    <div className={styles["hoverable-ripple"]} onClick={onClick}>
      {isRippling && (
        <span
          className={classNames(styles["hoverable-ripple__ripple"], {
            [styles["hoverable-ripple__ripple--white"]]: color === "white",
            [styles["hoverable-ripple__ripple--grey"]]: color === "grey",
          })}
          style={{ left: coords.x, top: coords.y }}
        />
      )}
    </div>
  );
};

const Hoverable = {
  Underline,
  Fade,
  Ripple,
};

export default Hoverable;
