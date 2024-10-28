import React from "react";
import BottomWarning from "../components/BottomWarning";
import ButtonBox from "../components/ButtonBox";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import Sideheading from "../components/Sideheading";

const CreateAccount = () => {
  return (
    <div className="flex bg-gray-400 justify-center h-screen">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white h-max w-80 p-2 px-4 text-center">
          <Heading label={"Sign Up"}></Heading>
          <Sideheading label={"Enter your information to create an account"} />
          <InputBox label={"First Name"} placeholder={"john"} />
          <InputBox label={"Last Name"} placeholder={"Doe"} />
          <InputBox label={"Email"} placeholder={"john@gmail.com"} />
          <InputBox label={"Password"} placeholder={"123"} />
          <div className="pt-6">
            <ButtonBox label={"Sign Up"} />
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
