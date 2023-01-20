
import React, { useState } from 'react'
import jsonData from './json/data.json'
import './App.css';
import Table from './components/Table';

function App() {
  const [tableData, setTableData] = useState([]);
  return (
    <div>
      <Table tableData={tableData} setTableData={setTableData} />
    </div>
  );
}

export default App;
