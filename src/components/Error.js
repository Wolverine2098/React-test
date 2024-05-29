import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Ooops!</h1>
      <h2>Something is wrong</h2>
      <h3>{err.Error}</h3>
    </div>
  );
};

export default Error;
