import s from "./styles.module.scss";

import { ReactNode } from "react";

interface TableProps {
  children?: ReactNode;
}

function Table({ children }: TableProps) {
  return (
    <div className={s.tableWrapper}>
      <table className={`${s.table} body-i`}>
        <tr className={s.tableLine}>
          <th className={s.tableTh}>Company</th>
          <th className={s.tableTh}>Contact</th>
          <th className={s.tableTh}>Country</th>
        </tr>
        <tr className={s.tableLine}>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr className={s.tableLine}>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
        <tr className={s.tableLine}>
          <td>Ernst Handel</td>
          <td>Roland Mendel</td>
          <td>Austria</td>
        </tr>
        <tr className={s.tableLine}>
          <td>Island Trading</td>
          <td>Helen Bennett</td>
          <td>UK</td>
        </tr>
        <tr className={s.tableLine}>
          <td>Laughing Bacchus Winecellars</td>
          <td>Yoshi Tannamuri</td>
          <td>Canada</td>
        </tr>
        <tr className={s.tableLine}>
          <td>Magazzini Alimentari Riuniti</td>
          <td>Giovanni Rovelli</td>
          <td>Italy</td>
        </tr>
      </table>
    </div>
  );
}

export default Table;
