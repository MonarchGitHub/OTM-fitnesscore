import logo from './logo.svg';
import './App.css';
import Fitness from './Screens/Fitness/Fitness';
import React, { useState, useEffect } from "react";
import Search from './Screens/Search/Search';

function App() {

  const [data, setData] = useState(null);
  const [csvdata, setcsvData] = useState(null);
  const [userID, setuserID] = useState('63fda0fed228e6cb59f7bddc');
  const [URL, setURL] = useState('/api/csv?userID=' + userID);
  // setuserID('63fda0fed228e6cb59f7bddc');


  // useEffect(() => {
  //   const callBackendAPI = async () => {
  //     try {
  //       const response = await fetch("/api/csv");
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch data");
  //       }
  //       const body = await response.json();
  //       setData(body.message);
  //     } catch (error) {
  //       console.error(error.message);
  //     }
  //   };
  //   callBackendAPI();
  // }, []);


  // fetching csv

  // useEffect(() => {
  //   const callBackendAPI = async () => {

  //     // fetch('/api/csv/' + userID)
  //     fetch(URL)
  //       .then(response => response.json())
  //       .then(resdata => {
  //         // Handle the data as needed
  //         console.log(resdata.pop());
  //         // console.log(resdata.pop().code);
  //         setcsvData(resdata)
  //         // console.log("csv data is");
  //         // console.log(csvdata);
  //         // console.log(csvdata.pop().code);

  //         // console.log("destructured data is" + );
  //       })
  //       .catch(error => {
  //         console.error('Error fetching CSV data:', error);

  //       });

  //   };
  //   callBackendAPI();
  // }, []);





  return (
    <>
      {/* <Search></Search> */}
      {/* <p >{data}</p> */}
      {/* <p >{csvdata}</p> */}
      <Fitness ></Fitness>

    </>
  );
}

export default App;
