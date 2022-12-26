import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";
const cc = classNames.bind(styles);

function Button({
  to,
  href,
  onClick,
  primary = false,
  outline = false,
  round = false,
  className,
  disabled = false,
  text = false,
  size = "medium",
  children,
  ...passProps
}) {
  let Comp = "button";
  // props noi bo
  const props = {
    onClick,
    ...passProps,
  };
  // remove event listener when have prop disabled
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof props[key] === "function") {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  const classes = cc(
    "wrapper",
    { primary, outline, text, disabled, round, [className]: className },
    size
  );

  return (
    <Comp className={classes} {...props}>
      <span>{children}</span>
    </Comp>
  );
}

export default Button;
