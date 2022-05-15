import React, { useState, useEffect } from "react";
import Axios from "axios";

function ApiCall() {
  const [list, setList] = useState([]);
  useEffect(() => {
    Axios({
      url: "https://fakestoreapi.com/products/",
    })
      .then((response) => {
          console.log(response.data)
            setList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setList]);

  return (
    
      <div>
        {list.map((item) => (
            <div key={item.id}>
            <h3>{item.category}</h3>
            <p>{item.description}</p>
            <img src={item.image} alt="" />
            </div>
        ))}
      </div>
    
  );
}

export default ApiCall;