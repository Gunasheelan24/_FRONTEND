import React from "react";
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [getDetails, setdata] = useState([]);
  const Apidata = async () => {
    try {
      const getData = await axios({
        method: "GET",
        url: "https://reactfakeapigunaguna.onrender.com/",
      });
      setdata(getData.data.message);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <h1>Hello Welcome</h1>
        <button onClick={Apidata}>Search</button>
        {getDetails.map((detali) => (
          <ul>
            <li>{detali}</li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default App;
