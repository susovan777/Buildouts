import React, { useState, useEffect } from "react";
import "./App.css";
import Table from "./Components/Table";

function App() {
  const [apiData, setApiData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [datasPerPage] = useState(10);

  const fetchedData = async () => {
    try {
      const response = await fetch(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
      );
      const data = await response.json();
      setApiData(data);
    } catch (e) {
      console.error("failed to fetch data" + e);
    }
  };

  useEffect(() => {
    fetchedData();
  }, []);

  const lastIndex = currentPage * datasPerPage; // 1st page: 1 * 10 = 10
  const firstIndex = lastIndex - datasPerPage; // 1st page: 10 - 10 = 0
  const currentEmployees = apiData.slice(firstIndex, lastIndex); // index: 0 - 9
  const lastPageNumber = Math.ceil(apiData.length / datasPerPage);

  // handling previous button 
  const previous = () => {
    if (currentPage === 1) {
      return;
    }
    setCurrentPage((prev) => prev - 1);
  };
// handling next button
  const next = () => {
    if (currentPage === lastPageNumber) {
      return;
    }
    setCurrentPage((prev) => prev + 1);
  };

  // console.log(totalPages);

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
        {currentEmployees.map((emp) => {
          return <Table employee={emp} key={`emp${emp.id}`} />;
        })}
      </table>
      <div className="pagination">
        <button onClick={previous} className="prev">
          Previous
        </button>
        <div className="page_number">{currentPage}</div>
        <button onClick={next} className="next">
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
