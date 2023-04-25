import React from 'react';
import { useSelector } from 'react-redux';

const Table = () => {
  const buttons = useSelector(state => state.buttons);

  return (
    <table>
      <thead>
        <tr>
          <th>Button Name</th>
          <th>Click Count</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(buttons).map(([buttonName, clickCount]) => (
          <tr key={buttonName}>
            <td>{buttonName}</td>
            <td>{clickCount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
