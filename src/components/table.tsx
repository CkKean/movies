import { FC } from "react";

interface props {
  items: {
    title?: string;
    value?: string;
  }[];
}

const Table: FC<props> = ({ items }) => {
  return (
    <table>
      <tbody>
        {items.length > 0 &&
          items.map((item) => (
            <tr>
              <td>{item.title}</td>
              <td>{item.value}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
