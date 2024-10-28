import React from "react";
import { useState } from "react";
import BottomWarning from "../components/BottomWarning";
import ButtonBox from "../components/ButtonBox";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import Sideheading from "../components/Sideheading";
import axios from "axios";

const CreateAccount = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex bg-gray-400 justify-center h-screen">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white h-max w-80 p-2 px-4 text-center">
          <Heading label={"Sign Up"}></Heading>
          <Sideheading label={"Enter your information to create an account"} />
          <InputBox
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            label={"First Name"}
            placeholder={"john"}
          />
          <InputBox
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            label={"Last Name"}
            placeholder={"Doe"}
          />
          <InputBox
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            label={"Email"}
            placeholder={"john@gmail.com"}
          />
          <InputBox
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            label={"Password"}
            placeholder={"123"}
          />
          <div className="pt-6">
            <ButtonBox
              onClick={() => {
                axios.post("http://localhost:8000/api/v1/user/createAccount", {
                  email,
                  firstname,
                  lastname,
                  password,
                });
              }}
              label={"Sign Up"}
            />
          </div>
          <BottomWarning
            label={"Already have an account?"}
            buttonText={"Sign Up"}
            to={"/Signin"}
          ></BottomWarning>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
