import { forwardRef } from "react";

function Image({ ...props }, ref) {
  // eslint-disable-next-line jsx-a11y/alt-text
  return <img ref={ref} {...props} />;
}

export default forwardRef(Image);
