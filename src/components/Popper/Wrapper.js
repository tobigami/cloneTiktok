import classNames from "classnames/bind";
import styles from "./Wrapper.module.scss";
const cc = classNames.bind(styles);

function Wrapper({ children }) {
  return <div className={cc("wrapper")}>{children}</div>;
}
export default Wrapper;
