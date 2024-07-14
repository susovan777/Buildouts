import React from "react";

function Table({ employee }) {
  return (
    <tbody>
      <tr>
        <td>{employee.id}</td>
        <td>{employee.name}</td>
        <td>{employee.email}</td>
        <td>{employee.role}</td>
      </tr>
    </tbody>
  );
}

export default Table;

/* 
<tbody>
          <tr>
            <td>1</td>
            <td>Aaron Miles</td>
            <td>aaron@mailinator.com</td>
            <td>Admin</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Aaron Miles</td>
            <td>aaron@mailinator.com</td>
            <td>Admin</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Aaron Miles</td>
            <td>aaron@mailinator.com</td>
            <td>Admin</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Aaron Miles</td>
            <td>aaron@mailinator.com</td>
            <td>Admin</td>
          </tr>
        </tbody>
      </table>
 */