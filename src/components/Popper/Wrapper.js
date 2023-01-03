import classNames from "classnames/bind";
import styles from "./Wrapper.module.scss";
const cc = classNames.bind(styles);

function Wrapper({ children, className }) {
  return <div className={cc("wrapper", className)}>{children}</div>;
}
export default Wrapper;
