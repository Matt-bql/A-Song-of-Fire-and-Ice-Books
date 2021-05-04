import React from "react";

function BookContent({ data, filteredData }) {
  return (
    <div>
      {filteredData.map((d) => (
        <div key={d.name}>{d}</div>
      ))}
    </div>
  );
}
export default BookContent;
