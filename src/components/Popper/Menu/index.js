import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { Wrapper as WrapperPopper } from "~/components/Popper/";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";
const cx = classNames.bind(styles);
function Menu({ children, items = [] }) {
  function renderItem() {
    return items.map((item, index) => <MenuItem key={index} data={item} />);
  }
  return (
    <Tippy
      delay={[0, 500]}
      interactive={true}
      placement={"bottom-end"}
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <WrapperPopper className={cx("menu-custom")}>
            {renderItem()}
          </WrapperPopper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
