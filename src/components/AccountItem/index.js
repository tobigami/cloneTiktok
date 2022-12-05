import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
const cc = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cc("wrapper")}>
      <img
        className={cc("avatar")}
        src="https://cdn-icons-png.flaticon.com/512/888/888863.png"
        alt="avatar"
      />
      <div className={cc("info")}>
        <div className={cc("name")}>
          intel
          <FontAwesomeIcon icon={faCheckCircle} className={cc("icon-check")} />
        </div>

        <div className={cc("username")}>Intel Corporation</div>
      </div>
    </div>
  );
}

export default AccountItem;
