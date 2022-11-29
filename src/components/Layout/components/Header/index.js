import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import {
  faSpinner,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="TikTok"></img>
        </div>
        <div className={cx("search")}>
          <input placeholder="Search accounts and videos" spellCheck="false" />
          <button className={cx("clear")}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>

          <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
          <button className={cx("search-btn")}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className={cx("actions")}>this is actions</div>
      </div>
    </header>
  );
}
export default Header;
