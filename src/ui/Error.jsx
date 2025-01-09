import { useNavigate, useRouteError } from "react-router-dom";
import LinkButtton from "./LinkButtton";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <LinkButtton to="-1">&larr; Go back</LinkButtton>
    </div>
  );
}

export default Error;
