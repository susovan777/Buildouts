import React, { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import Table from "./Table";

function App() {
  const [apiData, setApiData] = useState([]);

  const fetchedData = async () => {
    try {
      const response = await fetch(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
      );
      const data = await response.json();
      setApiData(data);
    } catch (e) {
      console.error("Error fetching data: " + e);
    }
  };

  useEffect(() => {
    fetchedData();
  }, []);

  console.log(apiData);

  return (
    <div className="App">
      <h2>Employee Data Table</h2>
      <table>
        <thead className="table_header">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        {apiData.map((emp) => {
          return (
            <Table employee={emp} />
          )
        })}
      </table>
      <div className="pagination">
        <button className="prev">Previous</button>
        <button className="page_number">1</button>
        <button className="next">Next</button>
      </div>
    </div>
  );
}

export default App;
