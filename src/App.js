import './App.css';
import Login from './components/login.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddDefect from './components/add-defect.jsx';
import ViewDefects from './components/view-defects.jsx';
import { useState } from 'react';

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      defectCategory: "UI",
      description: "Change the UI for the landing page",
      priority: "3",
      status: "open",
      changeStatus: "Close Defect"
    },
    {
      id: 2,
      defectCategory: "Functional",
      description: "Dashboard functionality is looking incorrect",
      priority: "1",
      status: "open",
      changeStatus: "Close Defect"
    },
    {
      id: 3,
      defectCategory: "Change Request",
      description: "Change the Settings entire design",
      priority: "2",
      status: "open",
      changeStatus: "Close Defect"
    },
    {
      id: 4,
      defectCategory: "UI",
      description: "Change the UI for Login screen",
      priority: "1",
      status: "closed",
      changeStatus: "No action pending"
    },
  ]);

  const handleAddData = (formData) => {
    setData([...data, formData]);
  }

  const handleCloseDefectProps = (id) => {
    const changeData = data.map((item) => {
      if(item.id === id) {
        return { ...item, status: "closed", changeStatus: "No action pending" };
      } else {
        return item;
      }
    });
    setData(changeData);
  }

  console.log(data);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/add-defect" element={<AddDefect handleAddData={handleAddData} data={data} />} />
          <Route path="/view-defects" element={<ViewDefects data={data} handleCloseDefectProps={handleCloseDefectProps} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
