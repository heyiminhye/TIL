import React from "react";

export const Timeline = ({ children }) => (
  <div className="container">
    <ul className="timeline">{children}</ul>
  </div>
);

export const Event = ({ month, year, children }) => (
  <li className="event">
    <label className="icon"></label>
    <div className="body">
      <table>
        <th>{year}</th>
        <tr>
          <td>2월</td>
          <td>롯데홈쇼핑</td>
        </tr>
        <tr>
          <td></td>
          <td>신세계</td>
        </tr>
        <tr>
          <td>4월</td>
          <td>하프클럽</td>
        </tr>
        <tr>
          <td>5월</td>
          <td>지에스샵</td>
        </tr>
      </table>
      <div className="description">{children}</div>
    </div>
  </li>
);
