import React from "react";
import { useParams, useMatch, useNavigate } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { first, last } = params;
  const url = `/user/${first}/${last}`;
  const adminsUrl = [
    "/user/avi/cohen",
    "/user/avi/cohen2",
    "/user/avi/cohen3",
    "/user/avi/cohen4",
  ];

  const match = useMatch(adminsUrl.includes(url) ? url : "/");
  //   const match = useMatch("/user/1/2");

  const greet = match
    ? `Hello Admin - ${first} ${last}`
    : `Hello user - ${first} ${last}`;

  return (
    <div>
      {greet}{" "}
      <button
        onClick={() =>
          navigate("..", { state: { assigned: true, test: "test" } })
        }
      >
        go home
      </button>
      <button onClick={() => navigate("../about")}>go about</button>
      <button onClick={() => navigate(-2)}>2 Back</button>
      <button onClick={() => navigate(-1)}>1 Back</button>
      <button onClick={() => navigate(1)}>1 forward</button>
    </div>
  );
};

export default User;
