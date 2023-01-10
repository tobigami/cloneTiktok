import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { useState } from "react";
import { Wrapper as WrapperPopper } from "~/components/Popper/";
import Header from "./Header";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";
const cx = classNames.bind(styles);
const defaultFunction = () => {};
function Menu({ children, items = [], onChange = defaultFunction }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];
  function renderItem() {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((pre) => [...pre, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  }
  return (
    <Tippy
      // visible={true}
      offset={[10, 5]}
      delay={[0, 500]}
      interactive={true}
      placement={"bottom-end"}
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <WrapperPopper className={cx("menu-custom")}>
            {history.length > 1 && (
              <Header
                title={"Language"}
                onBack={() => {
                  setHistory((pre) => pre.slice(0, history.length - 1));
                }}
              />
            )}
            {renderItem()}
          </WrapperPopper>
        </div>
      )}
      onHide={() => setHistory((pre) => pre.slice(0, 1))}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
