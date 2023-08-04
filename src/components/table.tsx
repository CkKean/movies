import { FC, ReactNode } from "react";
import { isNullOrUndefined } from "../utils/validationHelper";

interface props {
  items: {
    title?: string;
    value?: string | number | ReactNode;
  }[];
}

const Table: FC<props> = ({ items }) => {
  return (
    <table>
      <tbody>
        {items.length > 0 &&
          items.map((item) => (
            <tr>
              <td style={{ width: "17%", fontWeight: 700 }}>{item.title}</td>
              <td>{!isNullOrUndefined(item.value) ? item.value : "-"}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
