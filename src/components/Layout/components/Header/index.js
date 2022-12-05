import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import { Wrapper as WrapperPopper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";

// import icon
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

// import Tippy
import Tippy from "@tippyjs/react/headless";
const cx = classNames.bind(styles);
function Header() {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);
  return (
    <header className={cx("wrapper")}>
      <div className={cx("container")}>
        {/* UI LOGO */}
        <div className={cx("logo")}>
          <img src={images.logo} alt="TikTok"></img>
        </div>

        {/* UI SEARCH */}
        <Tippy
          interactive={true}
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <WrapperPopper>
                <h4 className={cx("search-title")}>Account</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </WrapperPopper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input
              placeholder="Search accounts and videos"
              spellCheck="false"
            />
            <button className={cx("clear")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={cx("actions")}>this is actions</div>
      </div>
    </header>
  );
}
export default Header;
