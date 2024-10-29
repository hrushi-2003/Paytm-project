import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import ButtonBox from "./ButtonBox";
const token = localStorage.getItem("token");
const User = () => {
  const [filter, setFilter] = useState("");
  const [users, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/user/getUsers?filter=" + filter, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUser(response.data.user);
      });
  }, [filter]);
  return (
    <>
      <div className="mt-6 font-bold text-4xl bg-white">USERS</div>
      <input
        onChange={(e) => {
          setFilter(e.target.value);
        }}
        placeholder="Search Users..."
        className="w-full my-4 px-2 py-1 border rounded border-gray-400 "
      />
      <div>
        {users.map((user) => (
          <Users user={user} />
        ))}
      </div>
    </>
  );
};
function Users({ user }) {
  const symbolOfUser = user.firstname[0].toUpperCase();
  const firstname = user.firstname.toUpperCase();
  const lastname = user.lastname.toUpperCase();
  const navigate = useNavigate();
  return (
    <div className="flex justify-between m-4">
      <div className="flex">
        <div className="w-12 h-12 text-2xl bg-gray-300 rounded-full flex justify-center  ">
          <div className="flex flex-col justify-center ">{symbolOfUser}</div>
        </div>
        <div className="flex flex-col justify-center ml-4">
          {firstname + " "}
          {lastname}
        </div>
      </div>
      <div>
        <ButtonBox onClick={()=>{
          navigate('/send?id='+user._id+"&name="+firstname)
        }} label={"Send Money"} />
      </div>
    </div>
  );
}

export default User;
