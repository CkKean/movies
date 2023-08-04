import { FC } from "react";

const Skeleton: FC = () => {
  return (
    <div className="skeleton-container">
      <div className="skeleton-line"></div>
      <div className="skeleton-line"></div>
      <div className="skeleton-line"></div>
      <div className="skeleton-line"></div>
    </div>
  );
};

export default Skeleton;
