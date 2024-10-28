import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const token = localStorage.getItem("token");
const Balance = () => {
  const [balance, setBalance] = useState(0);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/account/balance", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setBalance(Math.floor(response.data.balance));
      });
  }, []);
  return <div className="text-4xl"> Your Balance : $ {balance}</div>;
};

export default Balance;
