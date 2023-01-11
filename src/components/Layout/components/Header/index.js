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
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faQuestion,
  faSignOut,
  faSpinner,
  faUpload,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark, faKeyboard } from "@fortawesome/free-regular-svg-icons";

// import TippyHeadless
import TippyHeadless from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Menu from "~/components/Popper/Menu";
import Image from "~/components/Image";
import { MessageIcon } from "~/components/Icon";
import { InboxIcon } from "~/components/Icon";
import { UploadIcon } from "~/components/Icon";
const cx = classNames.bind(styles);
const MENU_ITEM = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
    children: {
      title: "language",
      data: [
        {
          type: "language",
          code: "en",
          title: "English",
        },

        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
      ],
    },
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
const menu_item = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: "View Profile",
    to: "/profile",
  },

  {
    icon: <FontAwesomeIcon icon={faCoins} />,
    title: "Get Coins",
    to: "/coin",
  },

  {
    icon: <FontAwesomeIcon icon={faGear} />,
    title: "Setting",
    to: "/setting",
  },
  ...MENU_ITEM,
  {
    icon: <FontAwesomeIcon icon={faSignOut} />,
    title: "Log Out",
    to: "/logout",
    separate: true,
  },
];

// Component
function Header() {
  const currentUser = true;
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

  const handleMenuItem = (menuItem) => {
    console.log(menuItem);
  };

  return (
    <header className={cx("wrapper")}>
      <div className={cx("container")}>
        {/* UI LOGO */}
        <div className={cx("logo")}>
          <img src={images.logo} alt="TikTok"></img>
        </div>

        {/* UI SEARCH  USE  TIPPY*/}
        <TippyHeadless
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
        </TippyHeadless>

        {/* action */}
        <div className={cx("actions")}>
          {currentUser ? (
            <>
              <Button
                leftIcon={<UploadIcon width="2rem" height="2rem " />}
                text
              >
                Upload
              </Button>

              <Tippy
                delay={[200, 200]}
                content="message"
                placement="bottom"
                theme="tomato"
              >
                <button>
                  <MessageIcon width="2.6rem" height="2.6rem" />
                </button>
              </Tippy>

              <Tippy
                delay={[0, 200]}
                content="inbox"
                placement="bottom"
                theme="tomato"
              >
                <button>
                  <InboxIcon />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button rightIcon={<FontAwesomeIcon icon={faUpload} />} text>
                Upload
              </Button>
              <Button rightIcon={<FontAwesomeIcon icon={faUser} />} primary>
                Login
              </Button>
            </>
          )}
          <Menu
            items={currentUser ? menu_item : MENU_ITEM}
            onChange={handleMenuItem}
          >
            {currentUser ? (
              <Image
                src="https://cdn-icons-png.flaticon.com/512/888/888863.png"
                alt="avatar"
                className={cx("user-avatar")}
              />
            ) : (
              <button className={cx("menu-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}
export default Header;
