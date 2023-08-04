import { FC } from "react";

interface props {
  items: {
    title: string;
    active: boolean;
    onClick?: () => any;
  }[];
}

const Tabs: FC<props> = ({ items }) => {
  return (
    <div className="tab-bar">
      {items.map((item) => (
        <div
          key={item.title}
          className={`tab-item ${item.active ? "active" : ""}`}
          onClick={item.onClick}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
