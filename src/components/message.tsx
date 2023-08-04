import { FC, ReactNode, useEffect } from "react";

interface props {
  title?: string | ReactNode;
  type?: "success" | "error";
  show: boolean;
  onClose: () => void;
}

const Message: FC<props> = ({ title, type = "alert", show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) {
    return null;
  }

  return <div className={`message ${type}`}>{title}</div>;
};

export default Message;
