import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Roles1 from "./components/Roles1";
import Chart from "./components/Chart";
import Foundation from "./components/Foundation";
import Roles from "./components/Roles";
import Culture from "./components/Culture";
import Visibility from "./components/Visibility";
import Architecture from "./components/Architecture";
import Budget from "./components/Budget";
import Governance from "./components/Governance";
import Value from "./components/Value";
import Right from "./components/Right";
import Purchase from "./components/Purchase";
import Process from "./components/Process";
import Last from "./components/Last";
import ErrorPage from "./components/ErrorPage";
import Resize from "./components/Resize";
import { useState, useEffect } from "react";
import Review from "./components/Review";
import Form from "./components/Form";
import { PrimeForm } from "./components/PrimeForm";
import data from "./userDataGet.json";
import Error from "./components/Error";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import Sent from "./components/Sent";

function App() {
  const [found, setFound] = useState([]);
  const [dataArray, setDataArray] = useState([]);
  useEffect(() => {
    // console.log("data --------", data);
    var newAns = Object.keys(data.data);
    // console.log(newAns);
    setDataArray(newAns);
  }, []);
  function found1(data) {
    setFound(data);
  }
  return (
    <div
      className="App"
      style={{
        width: "1920px",
        height: "750px",
        overflowY: "scroll",
        // display: "flex",
        // justifyContent:"center",
        // alignItems: "center",
      }}
    >
      <BrowserRouter >
      {/* <BrowserRouter basename="/finsecops"> */}
        <Routes>
          <Route path="/chart" element={<Chart />} />
          {/* <Route path="/foundation" element={<Foundation />} /> */}
          <Route path="/" element={<Foundation name={found1} data={found} />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/visi" element={<Visibility />} />
          <Route path="/archi" element={<Architecture />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/value" element={<Value />} />
          <Route path="/right" element={<Right />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/process" element={<Process />} />
          <Route path="/last" element={<Last />} />
          <Route path="/prime" element={<PrimeForm />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/error1" element={<Error />} />
          <Route path="/sent" element={<Sent />} />
          {/* <Route path="/resize" element={<Resize />} /> */}
          {/* <Route path="/form" element={<Form />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
