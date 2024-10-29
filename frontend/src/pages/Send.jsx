import React from "react";
import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import BottomWarning from "../components/BottomWarning";
import InputBox from "../components/InputBox";
import axios from "axios";

const Send = () => {
  const [amount, setAmount] = useState(0);
  const [params] = useSearchParams();
  const name = params.get("name").toUpperCase();
  const to = params.get("id");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  return (
    <div className="flex justify-center h-screen bg-slate-200">
      <div className="flex flex-col justify-center w-200">
        <div className="border bg-white w-200 h-min shadow-lg rounded-lg pl-10 pr-10 p-3 ">
          <div className="p-6 space-y-1.5">
            <h4 className="text-4xl font-bold">Send Money</h4>
          </div>
          <div className="flex justify-start space-x-4 mt-8">
            <div className="rounded-full bg-green-400 w-12 h-12 flex items-center justify-center">
              <span className="text-4xl font-bold">{name[0]}</span>
            </div>
            <h3 className="text-2xl font-bold p-1">{name}</h3>
          </div>
          <div className="mt-3">
            <InputBox
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              label={"Amount (in Rs)"}
              placeholder={"Enter Amount "}
            />
          </div>
          <div className="flex align-center justify-center mt-4 p-2">
            <button
              onClick={() => {
                axios.post(
                  "http://localhost:8000/api/v1/user/transfer",
                  {
                    Amount:amount,
                    to,
                  },
                  {
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                  }
                );
              }}
              className="bg-green-400 p-2 pl-10 pr-10 rounded-md hover:bg-green-300"
            >
              intiate transfer
            </button>
          </div>
          <BottomWarning
            buttonText={"return to home"}
            to={"http://localhost:5173/dashboard"}
          ></BottomWarning>
        </div>
      </div>
    </div>
  );
};

export default Send;
