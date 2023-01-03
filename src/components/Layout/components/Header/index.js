import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import images from "~/assets/images";
import { Wrapper as WrapperPopper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import Button from "~/components/Button";
import styles from "./Header.module.scss";

// import icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthAsia,
  faEllipsisVertical,
  faQuestion,
  faSpinner,
  faUpload,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark, faKeyboard } from "@fortawesome/free-regular-svg-icons";

// import Tippy
import Tippy from "@tippyjs/react/headless";
import Menu from "~/components/Popper/Menu";
const cx = classNames.bind(styles);
const MENU_ITEM = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
  },

  {
    icon: <FontAwesomeIcon icon={faQuestion} />,
    title: "Feedback & questions",
    to: "/feedback",
  },

  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard & Shortcuts",
  },
];

// Component
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

        {/* UI SEARCH  USE  TIPPY*/}
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

        {/* action */}
        <div className={cx("actions")}>
          <Button rightIcon={<FontAwesomeIcon icon={faUpload} />} text>
            Upload
          </Button>
          <Button rightIcon={<FontAwesomeIcon icon={faUser} />} primary>
            Login
          </Button>

          <Menu items={MENU_ITEM}>
            <button className={cx("menu-btn")}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </Menu>
        </div>
      </div>
    </header>
  );
}
export default Header;
