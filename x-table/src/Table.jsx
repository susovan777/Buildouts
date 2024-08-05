import React, { useState } from "react";

const Table = () => {
  const oldData = [
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
  ];
  const [data, setData] = useState(oldData);

  const sortByDate = () => {
    const sortedData = [...oldData].sort((a, b) => {
      if (new Date(b.date) - new Date(a.date))
        // 😶‍🌫️ if dates are different sort descending order
        return new Date(b.date) - new Date(a.date);
      else return b.views - a.views; // 😶‍🌫️ if dates are same sort as per views descending
    });
    setData(sortedData);
  };

  const sortByViews = () => {
    const sortedData = [...oldData].sort((a, b) => {
      if (b.views - a.views)
        // 😶‍🌫️ if views are different sort descending order
        return b.views - a.views;
      else return new Date(b.date) - new Date(a.date); // 😶‍🌫️ if views are same sort as per date descending
    });
    setData(sortedData);
  };
  return (
    <>
      <button onClick={sortByDate}>Sort by Date</button>
      <button onClick={sortByViews}>Sort by Views</button>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={`${item.date}-${item.views}`}>
                <td>{item.date}</td>
                <td>{item.views}</td>
                <td>{item.article}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
