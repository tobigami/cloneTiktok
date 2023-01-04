import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
const cx = classNames.bind(styles);

function Header({ title, onBack }) {
  return (
    <header className={cx("header")}>
      <button className={cx("btn-back")} onClick={onBack}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <h4 className={cx("title")}>{title}</h4>
    </header>
  );
}

export default Header;
