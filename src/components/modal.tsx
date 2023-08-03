import { FC, ReactNode } from "react";
import Button from "./button";

interface props {
  title: string | ReactNode;
  type?: "default" | "alert";
  show: boolean;
  onClose: () => void;
  children?: any;
}

const Modal: FC<props> = ({
  title,
  type = "default",
  show,
  onClose,
  children,
}) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className={`modal-container modal-${type}`}>
        <h2>{title}</h2>
        <div className="modal-content">
          {children}
          <Button
            style={{ display: "block", marginTop: "3rem", float: "right" }}
            type="default"
            onClick={onClose}
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
