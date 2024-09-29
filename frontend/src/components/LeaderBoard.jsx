import React from 'react';

function LeaderBoard({ users }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-black">
      <h2 className="text-2xl font-bold mb-4 text-orange-600">Tabla de líderes</h2>
      <ul className="space-y-4">
        {users.map((user, index) => (
          <li key={index} className="flex justify-between items-center bg-orange-100 p-4 rounded-lg shadow-sm border border-black">
            <span className="text-xl font-semibold">{user.nickname}</span>
            <span className="text-xl font-semibold">{user.max_wpm}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LeaderBoard;

// import React from 'react';

// function LeaderBoard({ users }) {
//   return (
//     <div className="overflow-x-auto">
//       <table className="table">
//         <thead className="text-xl">
//           <tr>
//             <th>#</th>
//             <th>Nickname</th>
//             <th>WPM</th>
//           </tr>
//         </thead>
//         <tbody className='text-xl'>
//           {users.map((user, index) => (
//             <tr key={user.id}>
//               <th>{index + 1}</th>
//               <td>{user.nickname}</td>
//               <td>{user.max_wpm}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default LeaderBoard;


