import React from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { userId } = useParams();
  //   const userId = params.userId;
  return <h3>User details {userId}</h3>;
};

export default UserDetails;
