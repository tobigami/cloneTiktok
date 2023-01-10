import Button from "~/components/Button";
import styles from "../Menu.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function MenuItem({ data, onClick }) {
  // chuahieuchonay
  const classNames = cx("menu-item", {
    separate: data.separate,
  });
  return (
    <Button
      className={classNames}
      to={data.to}
      leftIcon={data.icon}
      onClick={onClick}
    >
      {data.title}
    </Button>
  );
}
export default MenuItem;
