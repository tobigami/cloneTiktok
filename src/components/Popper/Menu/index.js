import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { Wrapper as WrapperPopper } from "~/components/Popper/";
import styles from "./Menu.module.scss";
const cx = classNames.bind(styles);
function Menu({ children }) {
  return (
    <Tippy
      interactive={true}
      placement={"bottom-end"}
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <WrapperPopper>
            <h4>Menu List</h4>
          </WrapperPopper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
