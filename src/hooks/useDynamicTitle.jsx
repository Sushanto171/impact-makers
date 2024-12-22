import { useEffect } from "react";

const useDynamicTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Impact Makers`;
  }, [title]);
};

export default useDynamicTitle;
