import { useState } from "react";

const User = (props) => {
  const { name, location } = props;
  const [count, setCount] = useState(0);
  return (
    <div className="user-card">
      <h1>{name}</h1>
      <h2>count: {count}</h2>
      <h2>Software engineer</h2>
      <h3>{location}</h3>
    </div>
  );
};

export default User;
