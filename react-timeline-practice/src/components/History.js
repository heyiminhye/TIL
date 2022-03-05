import React, { Fragment } from "react";

const History = () => {
  const hostorylist = [
    {
      id: 1,
      year: "2022",
      month: "2",
      content: {
        one: "Romaguera-Crona",
        two: "neural-net",
        three: "harness real-time e-markets",
      },
    },
    {
      id: 2,
      year: "2021",
      month: "3",
      content: {
        one: "Romaguera-Crona",
        two: "neural-net",
        three: "harness real-time e-markets",
      },
    },
  ];
  return (
    <Fragment>
      <h1>연혁</h1>
      <div className="container">
        <div className="timeline">
          {/* <li className="event">
            <label className="icon"></label>
          </li> */}
          <div className="body">
            {hostorylist.map((hostorylists) => (
              <div key={hostorylists.id}>
                <table>
                  <thead>
                    <li className="event">
                      <label className="icon"></label>
                    </li>
                    <tr>
                      <th>{hostorylists.year}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{hostorylists.month}월</td>
                      <td>222222222222</td>
                    </tr>
                    <tr>
                      <td rowspan="2">{hostorylists.month}월</td>
                      <td>33333333333333</td>
                    </tr>
                    <tr>
                      <td>444444444444</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default History;

{
  /* <tr>
                    <td>{hostorylists.month}월</td>
                    <td>{hostorylists.content.one}</td>
                    <td>{hostorylists.content.two}</td>
                    <td>{hostorylists.content.three}</td>
                  </tr> */
}

// import React, { Fragment } from "react";

// const History = ({ year, history }) => {
//   return (
//     <Fragment>
//       <h1>연혁</h1>
//       <div className="container">
//         <div className="timeline">
//           <li className="event">
//             <label className="icon"></label>
//           </li>
//           <div className="body">
//             {history.map((history) => (
//               <div key={history.id}>
//                 <table>
//                   <th>2019년</th>
//                   <tr>
//                     <td>1월</td>
//                     <td> {history.name}</td>
//                   </tr>
//                   <tr>
//                     <td>1월</td>
//                     <td> {history.name}</td>
//                   </tr>
//                   <tr>
//                     <td>1월</td>
//                     <td> {history.name}</td>
//                   </tr>
//                 </table>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </Fragment>
//   );
// };

// export default History;
