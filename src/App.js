import Table from './component/Table';
import React, { useState } from 'react'
import jsonData from './json/data.json'
import './App.css';

function App() {
  const [tableData, setTableData] = useState(jsonData);
  return (
    <div>
      <Table tableData={tableData} setTableData={setTableData} />
    </div>
  );
}

export default App;
